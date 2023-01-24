import styled from 'styled-components';

import Footer from '@modules/layout/footer';
import Nav from '@modules/common/nav';
import { useIsHomePage } from '@modules/common/hooks';

import { IChildrenProps, IIsFullViewProps } from '@utils/types';
import { devices } from '@styles/theme';

export const Container = styled.main<IIsFullViewProps>`
	min-height: calc(100vh - 47px);
	display: flex;

	${({ isFullView }) =>
		isFullView &&
		`justify-content: center;
		 flex-direction: column;
		   ${devices.mobile} {
		   	justify-content: flex-start;
		   }
		 `}
`;

export const PageLayout = styled.section<IIsFullViewProps>`
	width: 100%;
	max-width: 930px;
	margin-top: 63px;

	${devices.mobile} {
		margin-top: 40px;
	}

	${({ isFullView }) =>
		isFullView
			? `
			width: fit-content;
			margin-left: auto;
			margin-right: auto;
			order: -1;`
			: `margin-left: 407px;}`}
`;

const Layout = ({ children }: IChildrenProps) => {
	const isHomePage = useIsHomePage();
	return (
		<>
			<Container isFullView={isHomePage}>
				<Nav isFullView={isHomePage} />
				<PageLayout isFullView={isHomePage}>{children}</PageLayout>
			</Container>
			<Footer />
		</>
	);
};

export default Layout;
