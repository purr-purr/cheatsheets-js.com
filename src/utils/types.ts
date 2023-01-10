import React from 'react';

export interface IChildrenProps {
	children: React.ReactNode;
}

export interface ICheatsData {
	_id: number;
	category: string;
	title: string;
	descMeta: string;
	list: Array<ICheatsDataList>;
}

export interface INavPageItemProps {
	title: string;
	path: string;
}

export interface ICheatsDataList extends INavPageItemProps {
	desc?: string;
	data: Array<{
		subtitle?: string;
		source: string;
		_id: number;
	}>;
}

export interface INavGroupProps extends IIsFullViewProps {
	title: string;
	list: Array<ICheatsDataList>;
}

export interface IIsFullViewProps {
	isFullView?: boolean;
}
