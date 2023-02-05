import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import AppContext from '@modules/common/context/AppContext';
import Nav from '@modules/common/Nav';
import Footer from '@modules/Layout/Footer';
import Header from '@modules/Layout/Header';

import { useIsHomePage, useMediaQuery } from '@modules/common/hooks';

import { devices } from '@styles/theme';
import { MOBILE_BREAKPOINT } from '@utils/const';
import { IChildrenProps, IIsHomeStylesProps } from '@utils/types';

export const Container = styled.main<IIsHomeStylesProps>`
	min-height: calc(100vh - 47px);
	display: flex;
	position: relative;

	${({ isHomeStyles }) =>
		isHomeStyles &&
		`justify-content: center;
		 flex-direction: column;
		   ${devices.mobile} {
		   	justify-content: flex-start;
		   }
		 `}
`;

export const PageLayout = styled.section<IIsHomeStylesProps>`
	width: 100%;
	max-width: 930px;
	margin-top: 63px;

	${devices.mobile} {
		margin-top: 80px;
	}

	${({ isHomeStyles }) =>
		isHomeStyles &&
		`
			width: fit-content;
			margin-left: auto;
			margin-right: auto;
			order: -1;`}
`;

const Layout = ({ children }: IChildrenProps) => {
	const isHomeView = useIsHomePage();
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const [isMobileNavMode, setIsMobileNavMode] = useState(false);

	const handleMobileNavMode = useCallback((value: boolean) => {
		setIsMobileNavMode(value);
	}, []);

	const context = {
		isMobileNavMode,
		handleMobileNavMode,
	};

	useEffect(() => {
		const element = document.querySelector('html');
		if (!isMobile) {
			setIsMobileNavMode(false);
		}
		if (element) {
			element.setAttribute(
				'style',
				`${isMobileNavMode ? `overflow:hidden;` : ``}`,
			);
		}
	}, [isMobileNavMode, isMobile]);

	return (
		<>
			<AppContext.Provider value={context}>
				<Container isHomeStyles={isHomeView}>
					<Header />
					<Nav />
					<PageLayout isHomeStyles={isHomeView}>{children}</PageLayout>
				</Container>
				<Footer />
			</AppContext.Provider>
		</>
	);
};

export default Layout;
