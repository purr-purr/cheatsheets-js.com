import NavItem from '@modules/common/nav/navItem';
import { FC, Fragment } from 'react';
import { INavGroupProps } from '@utils/types';

import s from './NavGroup.module.scss';

const NavGroup: FC<INavGroupProps> = ({ title, list, isFullView = false }) => {
	return (
		<details className={s.container} open>
			<summary>{title}</summary>
			<ul className={s.list}>
				{list.map((item: any) => (
					<Fragment key={item.title}>
						<NavItem title={item.title} path={item.path} icon={item.icon} />
					</Fragment>
				))}
			</ul>
		</details>
	);
};

export default NavGroup;
