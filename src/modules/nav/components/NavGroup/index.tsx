import { FC, useContext } from 'react';
import styled from 'styled-components';

import Index from '@modules/layout/context';
import NavItem from '@modules/nav/components/NavItem';

import { useIsHomePage } from '@modules/common/hooks';

import { devices, hideScrollBar } from '@styles/theme';
import { DYNAMIC_PAGE_CATALOG_NAME } from '@utils/const';
import { formatToAttr } from '@utils/formatters';

import { IIsHomeStylesProps } from '@modules/common/types';
import { IIsMobNavStylesProps, INavGroupProps } from '@modules/nav/types';

type ContainerProps = IIsMobNavStylesProps & IIsHomeStylesProps;

export const Container = styled.details<ContainerProps>`
	margin-bottom: 16px;

	${devices.mobile} {
		margin-bottom: 32px;
	}

	${({ isHomeStyles }) =>
		!isHomeStyles &&
		`
		height: fit-content;
		overflow-y: scroll;
		padding-bottom: 30px;
		padding-left: 15px;
    padding-right: 15px;
    margin-left: -15px;
    ${hideScrollBar()}
		`}

	${({ isMobNavStyles }) => isMobNavStyles && `max-width: 320px;`}
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
	const { isMobileNavMode } = useContext(Index);

	return (
		<Container isHomeStyles={isHomeView} isMobNavStyles={isMobileNavMode} open>
			<Heading isHomeStyles={isHomeView}>{title}</Heading>
			<List isHomeStyles={isHomeView}>
				{list.map(
					(item: any) =>
						item.data[0].source.length > 1 && (
							<NavItem
								key={item.title}
								title={item.title}
								path={`/${DYNAMIC_PAGE_CATALOG_NAME}/${category}#${formatToAttr(
									item.title,
								)}`}
							/>
						),
				)}
			</List>
		</Container>
	);
};

export default NavGroup;
