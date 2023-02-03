import styled from 'styled-components';

import Footer from '@modules/layout/footer';
import Nav from '@modules/common/nav';
import { useIsHomePage } from '@modules/common/hooks';

import { IChildrenProps, IIsHomeStylesProps } from '@utils/types';
import { devices } from '@styles/theme';

export const Container = styled.main<IIsHomeStylesProps>`
	min-height: calc(100vh - 47px);
	display: flex;

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
		margin-top: 40px;
	}

	${({ isHomeStyles }) =>
		isHomeStyles
			? `
			width: fit-content;
			margin-left: auto;
			margin-right: auto;
			order: -1;`
			: `margin-left: 407px;}`}
`;

const Layout = ({ children }: IChildrenProps) => {
	const isHomeView = useIsHomePage();

	return (
		<>
			<Container isHomeStyles={isHomeView}>
				<Nav />
				<PageLayout isHomeStyles={isHomeView}>{children}</PageLayout>
			</Container>
			<Footer />
		</>
	);
};

export default Layout;
