import { FC } from 'react';
import styled from 'styled-components';

export const Text = styled.p`
	font-weight: 500;
	margin-bottom: 40px;
`;

const DescriptionText: FC<{
	text: string;
}> = ({ text }) => {
	return <Text>{text}</Text>;
};

export default DescriptionText;
