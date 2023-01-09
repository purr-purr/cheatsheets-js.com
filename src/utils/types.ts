import React from 'react';

export interface IChildrenProps {
	children: React.ReactNode;
}

export interface ICheatsData {
	id: number;
	category: string;
	title: string;
	list: Array<ICheatsDataList>;
}

export interface INavPageItemProps {
	title: string;
	path: string;
	icon: string;
}

export interface ICheatsDataList extends INavPageItemProps {
	desc: string;
	data: Array<{
		subtitle: string;
		source: string;
	}>;
}

export interface INavGroupProps extends IIsFullViewProps {
	title: string;
	list: Array<ICheatsDataList>;
}

export interface IIsFullViewProps {
	isFullView?: boolean;
}
