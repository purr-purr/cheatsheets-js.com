import styled from 'styled-components';

import Footer from '@modules/layout/footer';
import Nav from '@modules/common/nav';
import { IChildrenProps } from '@utils/types';
import { useIsHomePage } from '@modules/common/hooks';

export const CommonContainer = styled.main`
	min-height: calc(100vh - 47px);
	display: flex;
`;

export const HomeContainer = styled(CommonContainer)`
	justify-content: center;
	flex-direction: column;
`;

export const HomeLayout = styled.section`
	width: fit-content;
	margin-left: auto;
	margin-right: auto;
	order: -1;
`;

export const CommonLayout = styled.section``;

const Layout = ({ children }: IChildrenProps) => {
	const isHomePage = useIsHomePage();
	return (
		<>
			{isHomePage ? (
				<HomeContainer>
					<Nav isFullView />
					<HomeLayout>{children}</HomeLayout>
				</HomeContainer>
			) : (
				<CommonContainer>
					<Nav />
					<CommonLayout>{children}</CommonLayout>
				</CommonContainer>
			)}
			<Footer />
		</>
	);
};

export default Layout;
