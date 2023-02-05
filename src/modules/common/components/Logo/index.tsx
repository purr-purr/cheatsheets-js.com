import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LOGO from '@public/assets/logo.svg';

const Logo: FC<{
	width?: number;
	height?: number;
}> = ({ width, height }) => {
	return (
		<Link href={'/'} style={{ display: 'flex', alignItems: 'center' }}>
			<Image src={LOGO} alt="Logo" width={width} height={height} />
		</Link>
	);
};

export default Logo;
