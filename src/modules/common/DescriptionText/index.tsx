import { FC } from 'react';
import styled from 'styled-components';

import { devices } from '@styles/theme';

export const Text = styled.p`
	font-weight: 500;
	margin-bottom: 20px;

	${devices.mobile} {
		margin-bottom: 16px;
	}
`;

const DescriptionText: FC<{
	text: string;
}> = ({ text }) => {
	return <Text>{text}</Text>;
};

export default DescriptionText;
