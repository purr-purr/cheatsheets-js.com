import { FC, useContext } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import Index from '@modules/layout/context';

import { useIsHomePage } from '@modules/common/hooks';

import { devices } from '@styles/theme';

import LOGO from '@public/assets/logo.svg';

import { IIsHomeStylesProps } from '@modules/common/types';

export const LogoLink = styled.span<IIsHomeStylesProps>`
	${({ isHomeStyles }) =>
		!isHomeStyles &&
		`padding-left: 15px;
 		  ${devices.mobile} {
				padding-left: 0;
			}
    `}
`;

const Logo: FC<{
	width?: number;
	height?: number;
}> = ({ width, height }) => {
	const isHomeView = useIsHomePage();

	return (
		<Link href={'/'} style={{ display: 'flex', alignItems: 'center' }}>
			<LogoLink isHomeStyles={isHomeView}>
				<Image src={LOGO} alt="Logo" width={width} height={height} />
			</LogoLink>
		</Link>
	);
};

export default Logo;
