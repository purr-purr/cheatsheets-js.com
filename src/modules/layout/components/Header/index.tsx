import styled from 'styled-components';

import Logo from '@modules/common/components/Logo';
import NavButton from '@modules/nav/components/NavBurgerButton';

import { useIsHomePage, useMediaQuery } from '@modules/common/hooks';

import { colors, devices } from '@styles/theme';
import { MOBILE_BREAKPOINT } from '@utils/const';

export const HeaderContainer = styled.header`
	position: fixed;
	z-index: 11;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 70px;
	width: calc(100% - 40px);

	${devices.mobile} {
		background-color: ${colors.mainBg};
	}
`;

const Header = () => {
	const isHomeView = useIsHomePage();
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

	return !isHomeView ? (
		<HeaderContainer>
			<Logo width={248} height={16} />
			{isMobile && <NavButton />}
		</HeaderContainer>
	) : null;
};

export default Header;
