import { createElement, FC } from 'react';
import cn from 'classnames';

import s from './Heading.module.scss';

const Heading: FC<{
	text: string;
	isSubTitle?: boolean;
}> = ({ text, isSubTitle = false }) => {
	const classNameList = cn(s.container, isSubTitle && s[`container--subTitle`]);

	const element = createElement(
		isSubTitle ? 'h2' : 'h1',
		{ className: classNameList },
		text,
	);
	return element;
};

export default Heading;
