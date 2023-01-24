import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { formatToAttr } from '@utils/index';
import { colors, transition } from '@styles/theme';

import { IIsFullViewProps, INavPageItemProps } from '@utils/types';

type Props = IIsFullViewProps & INavPageItemProps;

export const ListItem = styled.li<IIsFullViewProps>`
	min-width: 251px;
	height: 40px;
	box-shadow: 0 4px 8px ${colors.darkShadow};
	border-radius: 12px;
	background-color: ${colors.white};
	border: 0.5px solid transparent;
	${transition('border', 0.7)};

	&:hover {
		border: 0.5px solid ${colors.mainBlack};
		cursor: pointer;
		${transition('border', 0.7)};
	}

	${({ isFullView }) =>
		isFullView &&
		`   
      min-width: 116px;
      height: 90px;
    `}
`;

export const Title = styled.p<IIsFullViewProps>`
	font-weight: 500;

	${({ isFullView }) => isFullView && `margin-top: 4px;`}
`;

export const LinkInner = styled.a<IIsFullViewProps>`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 10px 20px;

	${({ isFullView }) =>
		isFullView
			? `
		flex-direction: column;
    	justify-content: center;
    	`
			: `gap: 12px;`}
`;

const NavItem: FC<Props> = ({ title, path, isFullView }) => {
	const router = useRouter();
	const [isCheckRouter, setIsCheckRouter] = useState(false);
	const hash = formatToAttr(title);

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
		<ListItem isFullView={isFullView}>
			<Link href="/category/[category]" as={path} legacyBehavior>
				<LinkInner onClick={() => setIsCheckRouter(true)}>
					<Image
						src={getIconPath(title)}
						alt={`${title} icon`}
						width={20}
						height={20}
					/>
					<Title isFullView={isFullView}>{title}</Title>
				</LinkInner>
			</Link>
		</ListItem>
	);
};

export default NavItem;
