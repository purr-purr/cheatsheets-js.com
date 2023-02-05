import { useContext } from 'react';
import styled from 'styled-components';

import Index from '@modules/layout/context';

import { IIsMobNavStylesProps } from '@modules/nav/types';

import CLOSED_ICON from '@modules/nav/assets/navBurgerButton/navBurgerButton_closed-state.svg';
import OPENED_ICON from '@modules/nav/assets/navBurgerButton/navBurgerButton_opened-state.svg';

export const Button = styled.button<IIsMobNavStylesProps>`
	width: 40px;
	height: 40px;
	background-color: transparent;
	background-repeat: no-repeat;
	background-position: center;

	${({ isMobNavStyles }) =>
		`background-image: url(${
			isMobNavStyles ? OPENED_ICON.src : CLOSED_ICON.src
		});`}
`;

const NavBurgerButton = () => {
	const { handleMobileNavMode, isMobileNavMode } = useContext(Index);

	return (
		<Button
			onClick={() => handleMobileNavMode(!isMobileNavMode)}
			isMobNavStyles={isMobileNavMode}
		/>
	);
};

export default NavBurgerButton;
