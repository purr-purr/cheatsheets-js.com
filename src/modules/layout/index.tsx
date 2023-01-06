import React from 'react';
import Footer from '@modules/layout/footer';
import Nav from '@modules/common/nav';

interface ILayout {
	children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
	return (
		<>
			<Nav />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
