import { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import AppContext from '@modules/Layout/AppContext';

import { useIsHomePage } from '@modules/common/hooks';

import { colors, devices, transition } from '@styles/theme';
import { formatToAttr } from '@utils/index';
import { IIsHomeStylesProps, INavPageItemProps } from '@utils/types';

type Props = IIsHomeStylesProps & INavPageItemProps;

export const ListItem = styled.li<IIsHomeStylesProps>`
	background-color: ${colors.white};
	border-radius: 12px;
	box-shadow: 0 4px 8px ${colors.darkShadow};
	${transition('transform', 0.5)};

	&:hover,
	&:active,
	&:focus {
		cursor: pointer;
		transform: scale(1.05);
		${transition('transform', 0.5)};

		p:after {
			width: 100%;
			${transition('width', 0.5)};
		}
	}

	${({ isHomeStyles }) =>
		isHomeStyles
			? `   
      min-width: 116px;
      height: 90px;
      ${devices.mobile} {
      min-height: 50px;
      height: auto;
      }
    `
			: `
			min-width: 251px;
			height: 40px;
	`}
`;

export const Title = styled.p<IIsHomeStylesProps>`
	font-weight: 500;
	position: relative;

	${({ isHomeStyles }) => isHomeStyles && `margin-top: 4px;`}
	:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 0;
		height: 1px;
		background-color: ${colors.underline};
		${transition('width', 0.5)};
	}
`;

export const LinkInner = styled.a<IIsHomeStylesProps>`
	align-items: center;
	display: flex;
	height: 100%;
	padding: 10px 20px;
	width: 100%;

	${({ isHomeStyles }) =>
		isHomeStyles
			? `
		flex-direction: column;
    	justify-content: center;
    	${devices.mobile} {
			  min-height: 48px;
			  }
    	`
			: `gap: 12px;`}
`;

const NavItem: FC<Props> = ({ title, path }) => {
	const router = useRouter();
	const hash = formatToAttr(title);
	const isHomeView = useIsHomePage();
	const { handleMobileNavMode } = useContext(AppContext);

	const getIconPath = (iconName: string) => {
		return require(`@public/assets/images/icons/nav-icon_${formatToAttr(
			iconName,
		)}.png`);
	};

	useEffect(() => {
		const itCurrentBlock = router.asPath.includes(hash);
		itCurrentBlock && router.push(path);
	}, [router.asPath]);

	return (
		<ListItem
			isHomeStyles={isHomeView}
			onClick={() => handleMobileNavMode(false)}
		>
			<Link href="/category/[category]" as={path} legacyBehavior>
				<LinkInner isHomeStyles={isHomeView}>
					<Image src={getIconPath(title)} alt={title} width={20} height={20} />
					<Title isHomeStyles={isHomeView}>{title}</Title>
				</LinkInner>
			</Link>
		</ListItem>
	);
};

export default NavItem;
