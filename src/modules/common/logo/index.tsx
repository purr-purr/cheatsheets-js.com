import Image from 'next/image';
import Link from 'next/link';

const LOGO = 'assets/images/logo.svg';

const Logo = () => {
	return (
		<Link href={'/'}>
			<Image src={LOGO} alt="Logo" width={680} height={44} />
		</Link>
	);
};

export default Logo;
