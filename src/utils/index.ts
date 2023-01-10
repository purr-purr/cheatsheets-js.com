import { APP_TITLE, COMMON_KEY_WORDS } from '@utils/const';

export const createTitleMeta = (title: string) => {
	return `${title} | ${APP_TITLE}`;
};

export const createMetaKeyWords = (title: string, allSubTitles: any[]) => {
	const list = allSubTitles.join(', ');
	return `${title}, ${APP_TITLE}, ${list}, ${COMMON_KEY_WORDS}`;
};
