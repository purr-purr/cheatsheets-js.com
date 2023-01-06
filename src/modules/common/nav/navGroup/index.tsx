import s from './NavGroup.module.scss';
import NavItem from '@modules/common/nav/navItem';

const NavGroup = () => {
	return (
		<details className={s.container}>
			<summary>title</summary>
			<ul>
				<NavItem />
			</ul>
		</details>
	);
};

export default NavGroup;
