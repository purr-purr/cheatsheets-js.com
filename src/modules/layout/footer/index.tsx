import messages from '@utils/messages';

import s from './Footer.module.scss';

const Footer = () => {
	return <footer className={s.footer}>{messages.POWERED_BY}</footer>;
};

export default Footer;
