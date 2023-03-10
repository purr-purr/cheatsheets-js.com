import { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Index from '@modules/layout/context';

import { useIsHomePage } from '@modules/common/hooks';

import { colors, devices, transition } from '@styles/theme';
import { formatToAttr } from '@utils/formatters';

import { IIsHomeStylesProps } from '@modules/common/types';
import { INavPageItemProps } from '@modules/nav/types';

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

		p {
			opacity: 0.6;
			${transition('opacity', 0.5)};
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
	${({ isHomeStyles }) => isHomeStyles && `margin-top: 4px;`}
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

const NavItem: FC<INavPageItemProps> = ({ title, path }) => {
	const router = useRouter();
	const hash = formatToAttr(title);
	const isHomeView = useIsHomePage();
	const { handleMobileNavMode } = useContext(Index);

	const getIconPath = (iconName: string) => {
		try {
			return require(`@modules/nav/assets/navItem/navItem_icon-${formatToAttr(
				iconName,
			)}.png`);
		} catch (err) {
			return require(`@modules/nav/assets/navItem/navItem_icon-universal.png`);
		}
	};

	useEffect(() => {
		const itCurrentBlock = router.asPath.endsWith(hash);
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
