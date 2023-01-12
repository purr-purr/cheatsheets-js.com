import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LOGO from '@public/assets/images/logo.svg';

const Logo: FC<{ width?: number; height?: number; isFullView: boolean }> = ({
	width = 680,
	height = 44,
	isFullView,
}) => {
	return (
		<Link
			href={'/'}
			style={
				!isFullView
					? {
							marginBottom: '150px',
							display: 'block',
					  }
					: undefined
			}
		>
			<Image src={LOGO} alt="Logo" width={width} height={height} />
		</Link>
	);
};

export default Logo;
