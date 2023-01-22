import React from 'react';

export interface IChildrenProps {
    children: React.ReactNode;
}

export interface ICheatsData {
    _id: number;
    category: string;
    title: string;
    list: Array<ICheatsDataList>;
}

export interface INavPageItemProps {
    title: string;
    path: string;
    hash: string;
}

export interface ICheatsDataList {
    title: string;
    desc?: string;
    data: Array<{
        subtitle?: string;
        source: string;
    }>;
}

export interface INavGroupProps extends IIsFullViewProps {
    title: string;
    category: string;
    list: Array<ICheatsDataList>;
}

export interface IIsFullViewProps {
    isFullView?: boolean;
}

export interface ICodeFrameProps {
    isLoading?: boolean;
}
