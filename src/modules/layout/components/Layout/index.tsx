import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import Footer from '@modules/layout/components/Footer';
import Header from '@modules/layout/components/Header';
import Index from '@modules/layout/context';
import Nav from '@modules/nav/components/Nav';

import { useIsHomePage, useMediaQuery } from '@modules/common/hooks';

import { devices } from '@styles/theme';
import { MOBILE_BREAKPOINT } from '@utils/const';

import { IIsHomeStylesProps } from '@modules/common/types';
import { IChildrenProps } from '@modules/layout/types';

export const Container = styled.main<IIsHomeStylesProps>`
	min-height: calc(100vh - 71px);
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
			<Index.Provider value={context}>
				<Container isHomeStyles={isHomeView}>
					<Header />
					<Nav />
					<PageLayout isHomeStyles={isHomeView}>{children}</PageLayout>
				</Container>
				<Footer />
			</Index.Provider>
		</>
	);
};

export default Layout;
