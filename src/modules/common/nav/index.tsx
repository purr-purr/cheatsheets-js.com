import { FC, Fragment } from 'react';
import styled from 'styled-components';

import Logo from '@modules/common/logo';
import NavGroup from '@modules/common/nav/navGroup';

import data from '@data/data.json';
import { IIsFullViewProps } from '@utils/types';

export const Container = styled.nav<IIsFullViewProps>`
	height: fit-content;
	${({ isFullView }) =>
		isFullView
			? `
		width: fit-content;
		margin: 150px auto 0;
	
	`
			: `	
		position: fixed;
		top: 80px;
		`}
`;

export const Inner = styled.section<IIsFullViewProps>`
	${({ isFullView }) =>
		!isFullView &&
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

const Nav: FC<IIsFullViewProps> = ({ isFullView = false }) => {
	return (
		<Container isFullView={isFullView}>
			{!isFullView && <Logo width={248} height={16} isFullView={isFullView} />}
			<Inner isFullView={isFullView}>
				{data.map(
					(item: any) =>
						item.list[0].data[0].source.length > 1 && (
							<Fragment key={item._id}>
								<NavGroup
									title={item.title}
									list={item.list}
									isFullView={isFullView}
								/>
							</Fragment>
						),
				)}
			</Inner>
		</Container>
	);
};

export default Nav;
