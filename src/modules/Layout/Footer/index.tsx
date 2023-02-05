import styled from 'styled-components';

import Link from 'next/link';

import { transition } from '@styles/theme';
import { APP_AUTHOR, CONTACT_LINK } from '@utils/const';
import messages from '@utils/messages';

export const FooterContainer = styled.footer`
	height: 47px;
	margin-left: auto;
	width: fit-content;
	${transition('opacity', 0.5)};

	:hover {
		opacity: 0.6;
		${transition('opacity', 0.5)};
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
