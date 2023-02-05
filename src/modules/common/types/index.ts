export interface ICheatsData {
	_id: number;
	category: string;
	title: string;
	list: Array<ICheatsDataList>;
}

export interface ICheatsDataList {
	title: string;
	desc?: string;
	data: Array<{
		subtitle?: string;
		source: string;
	}>;
}

export interface IIsHomeStylesProps {
	isHomeStyles: boolean;
}
