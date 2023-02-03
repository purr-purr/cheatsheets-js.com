import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { formatToAttr } from '@utils/index';
import { colors, devices, transition } from '@styles/theme';

import { IIsHomeStylesProps, INavPageItemProps } from '@utils/types';
import { useIsHomePage } from '@modules/common/hooks';
import category from '@pages/category/[category]';

type Props = IIsHomeStylesProps & INavPageItemProps;

export const ListItem = styled.li<IIsHomeStylesProps>`
	background-color: ${colors.white};
	border: 0.5px solid transparent;
	border-radius: 12px;
	box-shadow: 0 4px 8px ${colors.darkShadow};
	${transition('border', 0.7)};

	&:hover {
		border: 0.5px solid ${colors.mainBlack};
		cursor: pointer;
		${transition('border', 0.7)};
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

const NavItem: FC<Props> = ({ title, path }) => {
	const router = useRouter();
	const [isCheckRouter, setIsCheckRouter] = useState(false);
	const hash = formatToAttr(title);
	const isHomeView = useIsHomePage();

	const getIconPath = (iconName: string) => {
		return require(`../../../../../public/assets/images/icons/nav-icon_${formatToAttr(
			iconName,
		)}.png`);
	};

	useEffect(() => {
		const itCurrentBlock = router.asPath.includes(hash);
		itCurrentBlock && router.push(path);
		setIsCheckRouter(false);
	}, [isCheckRouter, router.asPath]);

	return (
		<ListItem isHomeStyles={isHomeView}>
			<Link href="/category/[category]" as={path} legacyBehavior>
				<LinkInner isHomeStyles={isHomeView} onClick={() => setIsCheckRouter(true)}>
					<Image src={getIconPath(title)} alt={title} width={20} height={20} />
					<Title isHomeStyles={isHomeView}>{title}</Title>
				</LinkInner>
			</Link>
		</ListItem>
	);
};

export default NavItem;
