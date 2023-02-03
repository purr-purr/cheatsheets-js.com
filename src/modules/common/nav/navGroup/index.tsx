import { FC, Fragment } from 'react';
import styled from 'styled-components';

import NavItem from '@modules/common/nav/navItem';
import { IIsHomeStylesProps, INavGroupProps } from '@utils/types';
import { formatToAttr } from '@utils/index';

import { DYNAMIC_PAGE_CATALOG_NAME } from '@utils/const';
import { devices } from '@styles/theme';
import { useIsHomePage } from '@modules/common/hooks';

export const Container = styled.details`
	margin-bottom: 16px;

	${devices.mobile} {
		margin-bottom: 32px;
	}
`;

export const Heading = styled.summary<IIsHomeStylesProps>`
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

	${({ isHomeStyles }) => isHomeStyles && `margin-left: auto;`}
`;

export const List = styled.ul<IIsHomeStylesProps>`
	list-style-type: none;
	gap: 16px;
	display: flex;
	flex-direction: column;
	margin-top: 16px;

	${({ isHomeStyles }) =>
		isHomeStyles &&
		`   
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        margin-top: 24px;
    `}
`;

const NavGroup: FC<INavGroupProps> = ({ title, list, category }) => {
	const isHomeView = useIsHomePage();
	return (
		<Container open>
			<Heading isHomeStyles={isHomeView}>{title}</Heading>
			<List isHomeStyles={isHomeView}>
				{list.map(
					(item: any) =>
						item.data[0].source.length > 1 && (
							<Fragment key={item.title}>
								<NavItem
									title={item.title}
									path={`/${DYNAMIC_PAGE_CATALOG_NAME}/${category}#${formatToAttr(
										item.title,
									)}`}
								/>
							</Fragment>
						),
				)}
			</List>
		</Container>
	);
};

export default NavGroup;
