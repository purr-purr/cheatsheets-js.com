import Image from 'next/image';

const LOGO = 'assets/images/logo.svg';

import s from './Logo.module.scss';

const Logo = () => {
	return (
		<Image
			src={LOGO}
			alt="Logo"
			width={500}
			height={500}
			className={s.container}
		/>
	);
};

export default Logo;
