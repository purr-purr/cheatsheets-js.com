import { FC, Fragment } from 'react';
import styled from 'styled-components';

import NavItem from '@modules/common/nav/navItem';
import { IIsFullViewProps, INavGroupProps } from '@utils/types';
import { formatToAttr } from '@utils/index';

import { DYNAMIC_PAGE_CATALOG_NAME } from '@utils/const';

export const Container = styled.details`
	margin-bottom: 16px;
`;

export const Heading = styled.summary<IIsFullViewProps>`
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	list-style: none;
	width: fit-content;
	margin-right: auto;
	pointer-events: none;

	&::marker,
	&::-webkit-details-marker {
		display: none;
	}

	${({ isFullView }) => isFullView && `margin-left: auto;`}
`;

export const List = styled.ul<IIsFullViewProps>`
	list-style-type: none;
	gap: 16px;
	display: flex;
	flex-direction: column;
	margin-top: 16px;

	${({ isFullView }) =>
		isFullView &&
		`   
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        margin-top: 24px;
    `}
`;

const NavGroup: FC<INavGroupProps> = ({
	title,
	list,
	isFullView,
	category,
}) => {
	return (
		<Container open>
			<Heading isFullView={isFullView}>{title}</Heading>
			<List isFullView={isFullView}>
				{list.map(
					(item: any) =>
						item.data[0].source.length > 1 && (
							<Fragment key={item.title}>
								<NavItem
									title={item.title}
									path={`/${DYNAMIC_PAGE_CATALOG_NAME}/${category}#${formatToAttr(
										item.title,
									)}`}
									isFullView={isFullView}
								/>
							</Fragment>
						),
				)}
			</List>
		</Container>
	);
};

export default NavGroup;
