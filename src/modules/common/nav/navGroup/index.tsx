import cn from 'classnames';
import NavItem from '@modules/common/nav/navItem';
import { FC, Fragment } from 'react';
import { INavGroupProps } from '@utils/types';

import s from './NavGroup.module.scss';

const NavGroup: FC<INavGroupProps> = ({ title, list, isFullView }) => {
	return (
		<details className={s.container} open>
			<summary className={cn(s.heading, isFullView && s[`heading--fullView`])}>
				{title}
			</summary>
			<ul className={cn(s.list, isFullView && s[`list--fullView`])}>
				{list.map((item: any) => (
					<Fragment key={item.title}>
						<NavItem
							title={item.title}
							path={item.path}
							isFullView={isFullView}
						/>
					</Fragment>
				))}
			</ul>
		</details>
	);
};

export default NavGroup;
