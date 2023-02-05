import styled from 'styled-components';
import Link from 'next/link';

import { colors, transition } from '@styles/theme';
import { APP_AUTHOR, CONTACT_LINK } from '@utils/const';
import messages from '@utils/messages';

export const FooterContainer = styled.footer`
	margin-bottom: 30px;
	margin-top: 20px;
	margin-left: auto;
	width: fit-content;
	position: relative;
	line-height: 1.3;

	:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 0;
		height: 1px;
		background-color: ${colors.mainBlack};
		${transition('width', 0.5)};
	}

	:hover {
		:after {
			width: 100%;
			${transition('width', 0.5)};
		}
	}
`;

const Footer = () => {
	return (
		<FooterContainer>
			<Link target="_blank" href={CONTACT_LINK}>
				{messages.POWERED_BY + APP_AUTHOR}
			</Link>
		</FooterContainer>
	);
};

export default Footer;
