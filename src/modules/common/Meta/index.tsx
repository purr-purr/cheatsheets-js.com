import { FC } from 'react';
import Head from 'next/head';

import { APP_AUTHOR, APP_AUTHOR_SIGNATURE, APP_LINK } from '@utils/const';
import {
	createMetaDesc,
	createMetaKeyWords,
	createMetaTitle,
} from '@utils/index';

const Meta: FC<{
	title: string;
	desc: string | any[];
	keyWords: any[];
}> = ({ title, desc, keyWords }) => {
	const logoPath = '/assets/images/Logo.svg';
	const faviconPath = '/assets/images/favicon.ico';
	const metaTitle = createMetaTitle(title);
	const metaDesc = createMetaDesc(desc);
	const metaKeyWords = createMetaKeyWords(title, keyWords);

	return (
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link href={faviconPath} rel="icon" />
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<meta content="#F9F9F9" name="theme-color" />
			<meta content={metaTitle} name="description" />
			<link href={faviconPath} rel="apple-touch-icon" />
			{/*<link href="/public/assets/images/manifest.webmanifest"*/}
			{/*      rel="manifest"/>*/}

			<title>{metaTitle}</title>
			<meta name="description" content={metaDesc} />

			<meta name="keywords" content={metaKeyWords && metaKeyWords.toString()} />

			<meta name="author" content={APP_AUTHOR + ' ' + APP_AUTHOR_SIGNATURE} />
			<meta name="image" content={logoPath} />

			<meta property="og:type" content="website" />
			<meta property="og:title" content={metaTitle} />
			<meta property="og:description" content={metaDesc} />
			<meta property="og:image" content={logoPath} />
			<meta property="og:url" content={APP_LINK} />

			<link rel="canonical" href={APP_LINK} />

			<meta name="apple-mobile-web-app-title" content={metaTitle} />
			<meta name="apple-mobile-web-app-capable" content="yes" />

			<meta name="format-detection" content="telephone=no" />
			<meta name="format-detection" content="address=no" />
		</Head>
	);
};

export default Meta;
