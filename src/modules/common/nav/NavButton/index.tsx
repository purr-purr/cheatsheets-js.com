import { useContext } from 'react';
import styled from 'styled-components';

import AppContext from 'src/modules/common/context/AppContext';

import { IIsMobNavStylesProps } from '@utils/types';

import MOB_NAV_CLOSED_ICON from '@public/assets/images/icons/mob-nav_closed-state.svg';
import MOB_NAV_OPENED_ICON from '@public/assets/images/icons/mob-nav_opened-state.svg';

export const Button = styled.button<IIsMobNavStylesProps>`
	width: 40px;
	height: 40px;
	background-color: transparent;
	background-repeat: no-repeat;
	background-position: center;

	${({ isMobNavStyles }) =>
		`background-image: url(${
			isMobNavStyles ? MOB_NAV_OPENED_ICON.src : MOB_NAV_CLOSED_ICON.src
		});`}
`;

const NavButton = () => {
	const { handleMobileNavMode, isMobileNavMode } = useContext(AppContext);

	return (
		<Button
			onClick={() => handleMobileNavMode(!isMobileNavMode)}
			isMobNavStyles={isMobileNavMode}
		/>
	);
};

export default NavButton;
