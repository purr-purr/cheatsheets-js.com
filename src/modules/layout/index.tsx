import styled from 'styled-components';

import Footer from '@modules/layout/footer';
import Nav from '@modules/common/nav';
import { IChildrenProps, IIsFullViewProps } from '@utils/types';
import { useIsHomePage } from '@modules/common/hooks';

export const Container = styled.main<IIsFullViewProps>`
	min-height: calc(100vh - 47px);
	display: flex;

	${({ isFullView }) =>
		isFullView &&
		`
		justify-content: center;
		flex-direction: column;
	`}
`;

export const PageLayout = styled.section<IIsFullViewProps>`
	width: 100%;
	margin-top: 63px;

	${({ isFullView }) =>
		isFullView
			? `
			width: fit-content;
			margin-left: auto;
			margin-right: auto;
			order: -1;
		`
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
