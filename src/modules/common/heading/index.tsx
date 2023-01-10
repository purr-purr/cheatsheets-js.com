import { createElement, FC } from 'react';
import cn from 'classnames';

import s from './Heading.module.scss';

const Heading: FC<{
	text: string;
	isSubTitle?: boolean;
	idAttr?: string;
}> = ({ text, isSubTitle = false, idAttr }) => {
	const classNameList = cn(
		s.container,
		isSubTitle ? s[`container--subTitle`] : s[`container--title`],
	);

	const element = createElement(
		isSubTitle ? 'h2' : 'h1',
		{ className: classNameList, id: idAttr },
		text,
	);
	return element;
};

export default Heading;
