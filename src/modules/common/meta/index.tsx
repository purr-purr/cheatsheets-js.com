import Head from 'next/head';
import { FC } from 'react';

const Meta: FC<{
	title: string;
	desc: string;
}> = ({ title, desc }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={desc} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/public/assets/images/favicon.ico" />
		</Head>
	);
};

export default Meta;
