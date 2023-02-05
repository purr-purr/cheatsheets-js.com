import { ICheatsDataList } from '@modules/common/types';

export interface INavPageItemProps {
	title: string;
	path: string;
}

export interface INavGroupProps {
	title: string;
	category: string;
	list: Array<ICheatsDataList>;
}

export interface IIsMobNavStylesProps {
	isMobNavStyles: boolean;
}

export interface IIsMobileStylesProps {
	isMobileStyles?: boolean;
}
