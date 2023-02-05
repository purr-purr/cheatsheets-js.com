import { type } from 'os';

import {
	APP_META_DESC,
	APP_TITLE,
	CODE_FRAME_SETTINGS,
	COMMON_KEY_WORDS,
} from '@utils/const';

export const createMetaTitle = (title: string) => `${title} ${APP_TITLE}`;

// export const createMetaDescCommon = (title: string) =>
// 	`${title} ${APP_TITLE} ${APP_META_DESC}`;
//
// export const createMetaDescHome = (allSubTitles: any[]) => {
// 	const list = allSubTitles.join(' and ');
// 	return `${list} ${APP_TITLE} ${APP_META_DESC}`;
// };

export const createMetaDesc = (title: string | any[]) => {
	if (typeof title !== 'string') {
		const list = title.join(' and ');
		return `${list} ${APP_TITLE} ${APP_META_DESC}`;
	} else {
		return `${title} ${APP_TITLE} ${APP_META_DESC}`;
	}
};

export const createMetaKeyWords = (title: string, allSubTitles: any[]) => {
	const list = allSubTitles.join(', ');
	return `${title}, ${APP_TITLE}, ${list}, ${COMMON_KEY_WORDS}`;
};

export const formatToAttr = (item: string) => {
	const regExSpaces = /\s/g;
	return item.toLowerCase().replace(regExSpaces, '-');
};

export const fixSandboxLink = (item: string) =>
	item.replace('.io/s/', '.io/embed/') + CODE_FRAME_SETTINGS;
