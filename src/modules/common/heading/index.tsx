import { FC } from 'react';
import styled from 'styled-components';

export const MainTitle = styled.h1<{ isSubTitle: boolean }>`
	font-weight: 700;
	margin-bottom: 24px;
	font-size: ${(props) => (props.isSubTitle ? '20px' : '60px')};
	line-height: ${(props) => (props.isSubTitle ? '24px' : '73px')};
`;

const Heading: FC<{
	text: string;
	isSubTitle?: boolean;
	idAttr?: string;
}> = ({ text, isSubTitle = false, idAttr }) => {
	return (
		<MainTitle isSubTitle={isSubTitle} as={isSubTitle ? 'h2' : 'h1'} id={idAttr}>
			{text}
		</MainTitle>
	);
};

export default Heading;
