import s from './Nav.module.scss';
import NavGroup from '@modules/common/nav/navGroup';

const Nav = () => {
	return (
		<nav className={s.container}>
			<NavGroup />
		</nav>
	);
};

export default Nav;
