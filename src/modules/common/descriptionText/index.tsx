import { FC } from 'react';

import s from './Description.module.scss';

const Description: FC<{
	text: string;
}> = ({ text }) => {
	return <p className={s.container}>{text}</p>;
};

export default Description;
