import { APP_TITLE, COMMON_KEY_WORDS } from '@utils/const';

export const createTitleMeta = (title: string) => {
	return `${title} | ${APP_TITLE}`;
};

export const createMetaKeyWords = (title: string, allSubTitles: any[]) => {
	const list = allSubTitles.join(', ');
	return `${title}, ${APP_TITLE}, ${list}, ${COMMON_KEY_WORDS}`;
};

export const formatToAttr = (item: string) => {
	const regExSpaces = /\s/g;
	return item.toLowerCase().replace(regExSpaces, '-');
};
