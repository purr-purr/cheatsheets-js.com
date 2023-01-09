import s from './NavItem.module.scss';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { INavPageItemProps } from '@utils/types';

const NavItem: FC<INavPageItemProps> = ({ title, path, icon }) => {
	const test = (iconName: string) => {
		return require(`../../../../../public/assets/images/icons/nav-icon_${iconName.toLowerCase()}.png`);
	};

	return (
		<li className={s.container}>
			<Link href={path}>
				<Image src={test(title)} alt={title} width={20} height={20} />
				<span>{title}</span>
			</Link>
		</li>
	);
};

export default NavItem;
