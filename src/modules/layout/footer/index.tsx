import styled from 'styled-components';
import Link from 'next/link';

import messages from '@utils/messages';
import { CONTACT_LINK } from '@utils/const';

export const FooterContainer = styled.footer`
	height: 47px;
	margin-left: auto;
	width: fit-content;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<Link target="_blank" href={CONTACT_LINK}>
				{messages.POWERED_BY}
			</Link>
		</FooterContainer>
	);
};

export default Footer;
