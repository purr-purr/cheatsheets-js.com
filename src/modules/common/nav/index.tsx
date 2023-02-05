import { useContext } from 'react';
import styled from 'styled-components';

import NavGroup from '@modules/common/Nav/NavGroup';
import AppContext from '@modules/Layout/Context';

import { useIsHomePage, useMediaQuery } from '@modules/common/hooks';

import data from '@data/data.json';
import { colors, devices } from '@styles/theme';
import { MOBILE_BREAKPOINT } from '@utils/const';
import {
	IIsHomeStylesProps,
	IIsMobileStylesProps,
	IIsMobNavStylesProps,
} from '@utils/types';

type Props = IIsMobNavStylesProps & IIsHomeStylesProps & IIsMobileStylesProps;

export const Container = styled.aside<Props>`
	${({ isHomeStyles, isMobileStyles, isMobNavStyles }) =>
		!isHomeStyles && !isMobileStyles
			? `margin-right: 390px;`
			: !isHomeStyles && isMobileStyles && !isMobNavStyles
			? `display: none;`
			: ``}
`;

export const Inner = styled.nav<Props>`
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
		top: 150px;
		`}

	${({ isMobNavStyles, isHomeStyles }) =>
		isMobNavStyles &&
		!isHomeStyles &&
		`
    top: 0;
    width: calc(100% + 40px);
    min-height: 100vh;
    background-color: ${colors.mainBg};
    z-index: 5;
    left: -20px;
    padding: 96px 40px 20px;
    
    ${devices.mobile} {
        overflow: scroll;
        height: calc(100% + 6px);
    }
	`}
`;

const Nav = () => {
	const isHomeView = useIsHomePage();
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const { isMobileNavMode } = useContext(AppContext);

	return (
		<>
			<Container
				isHomeStyles={isHomeView}
				isMobileStyles={isMobile}
				isMobNavStyles={isMobileNavMode}
			>
				<Inner isHomeStyles={isHomeView} isMobNavStyles={isMobileNavMode}>
					{data.map(
						(item: any) =>
							item.list[0].data[0].source.length > 1 && (
								<NavGroup
									key={item._id}
									title={item.title}
									list={item.list}
									category={item.category}
								/>
							),
					)}
				</Inner>
			</Container>
		</>
	);
};

export default Nav;
