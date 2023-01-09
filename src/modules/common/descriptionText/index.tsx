import { FC } from 'react';

const DescriptionText: FC<{
	text: string;
}> = ({ text }) => {
	return <p>{text}</p>;
};

export default DescriptionText;
