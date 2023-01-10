import { FC, Fragment } from 'react';
import styled from 'styled-components';

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
		top: 150px;`}
`;

const Nav: FC<IIsFullViewProps> = ({ isFullView = false }) => {
	return (
		<Container isFullView={isFullView}>
			{data.map((item: any) => (
				<Fragment key={item._id}>
					<NavGroup
						title={item.title}
						list={item.list}
						isFullView={isFullView}
					/>
				</Fragment>
			))}
		</Container>
	);
};

export default Nav;
