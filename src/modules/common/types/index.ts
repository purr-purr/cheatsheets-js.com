// category and here
export interface ICheatsData {
	_id: number;
	category: string;
	title: string;
	list: Array<ICheatsDataList>;
}

// only here
export interface ICheatsDataList {
	title: string;
	desc?: string;
	data: Array<{
		subtitle?: string;
		source: string;
	}>;
}

// common
export interface IIsHomeStylesProps {
	isHomeStyles: boolean;
}
