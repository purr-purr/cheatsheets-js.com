import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import { formatToAttr } from '@utils/index';

import { IIsFullViewProps, INavPageItemProps } from '@utils/types';

import s from './NavItem.module.scss';

type Props = IIsFullViewProps & INavPageItemProps;

const NavItem: FC<Props> = ({ title, path, isFullView }) => {
	const getIconPath = (iconName: string) => {
		return require(`../../../../../public/assets/images/icons/nav-icon_${formatToAttr(
			iconName,
		)}.png`);
	};
	return (
		<li className={cn(s.container, isFullView && s[`container--fullView`])}>
			<Link
				href={path}
				className={cn(s.link, isFullView && s[`link--fullView`])}
			>
				<Image
					className={s.icon}
					src={getIconPath(title)}
					alt={`${title} icon`}
					width={20}
					height={20}
				/>
				<p className={cn(s.title, isFullView && s[`title--fullView`])}>
					{title}
				</p>
			</Link>
		</li>
	);
};

export default NavItem;
