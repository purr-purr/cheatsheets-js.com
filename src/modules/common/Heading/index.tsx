import { FC } from 'react';
import styled from 'styled-components';

import { devices } from '@styles/theme';
import { formatToAttr } from '@utils/index';

export const MainTitle = styled.h1<{ isSubTitle: boolean }>`
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;
  font-size: ${(props) => (props.isSubTitle ? '20px' : '60px')};

  ${devices.mobile} {
    margin-bottom: 16px;
    font-size: ${(props) => !props.isSubTitle && '32px'};

    ::before {
      content: '';
      display: block;
      height: 80px;
      margin-top: -80px;
      visibility: hidden;
    }
  }
}
`;

const Heading: FC<{
	text: string;
	isSubTitle?: boolean;
}> = ({ text, isSubTitle = false }) => {
	return (
		<MainTitle
			isSubTitle={isSubTitle}
			as={isSubTitle ? 'h2' : 'h1'}
			id={`${formatToAttr(text)}`}
		>
			{text}
		</MainTitle>
	);
};

export default Heading;
