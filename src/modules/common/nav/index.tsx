import { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';

import Logo from '@modules/common/logo';
import NavGroup from '@modules/common/nav/navGroup';

import data from '@data/data.json';
import { IIsHomeStylesProps } from '@utils/types';
import { devices } from '@styles/theme';
import { useIsHomePage, useMediaQuery } from '@modules/common/hooks';
import { MOBILE_BREAKPOINT } from '@utils/const';

export const Container = styled.nav<IIsHomeStylesProps>`
	height: fit-content;
	${({ isHomeStyles }) =>
		isHomeStyles
			? `
		width: fit-content;
		margin: 150px auto 0;
		${devices.mobile} {
		margin-top: 80px;
		}
		`
			: `	
		position: fixed;
		top: 80px;
		`}
`;

export const Inner = styled.div<IIsHomeStylesProps>`
	${({ isHomeStyles }) =>
		!isHomeStyles &&
		`
		height: calc(100vh - 240px);
		overflow-y: scroll;
		padding-bottom: 30px;
		
		::-webkit-scrollbar-thumb {
		  	background-color: transparent;
		}

		::-webkit-scrollbar-track-piece {
			background-color: transparent;
		}
		`}
`;

export const Button = styled.button``;

const Nav = () => {
	const isHomeView = useIsHomePage();
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const [showNav, setShowNav] = useState(true);
	const openNav = () => {
		setShowNav(true);
	};

	useEffect(() => {
		isMobile ? setShowNav(false) : setShowNav(true);
	}, [isMobile]);

	return (
		<Container isHomeStyles={isHomeView}>
			{isMobile && !isHomeView && <Button onClick={openNav}>open menu</Button>}
			{showNav && (
				<>
					{!isHomeView && <Logo width={248} height={16} />}
					<Inner isHomeStyles={isHomeView}>
						{data.map(
							(item: any) =>
								item.list[0].data[0].source.length > 1 && (
									<Fragment key={item._id}>
										<NavGroup
											title={item.title}
											list={item.list}
											category={item.category}
										/>
									</Fragment>
								),
						)}
					</Inner>
				</>
			)}
		</Container>
	);
};

export default Nav;
