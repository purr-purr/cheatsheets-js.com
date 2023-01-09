import { FC, Fragment } from 'react';
import styled from 'styled-components';

import NavGroup from '@modules/common/nav/navGroup';
import data from '@data/data.json';
import { IIsFullViewProps } from '@utils/types';

export const Container = styled.nav<{ isFull: boolean }>`
	${({ isFull }) =>
		isFull &&
		`
		width: fit-content;
		margin-left: auto;
		margin-right: auto;
		margin-top: 150px;
	`}
`;

const Nav: FC<IIsFullViewProps> = ({ isFullView = false }) => {
	return (
		<Container isFull={isFullView}>
			{data.map((item) => (
				<Fragment key={item.id}>
					<NavGroup title={item.title} list={item.list} />
				</Fragment>
			))}
		</Container>
	);
};

export default Nav;
