import { FC } from 'react';

import s from './Heading.module.scss';

const Heading: FC<{
	title: string;
}> = ({ title }) => {
	return <h1 className={s.container}>{title}</h1>;
};

export default Heading;
