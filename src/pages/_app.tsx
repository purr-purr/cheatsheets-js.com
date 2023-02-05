import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Layout from '@modules/Layout';

import * as gtag from '@utils/gtag';

import '@styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const isProduction = process.env.NODE_ENV === 'production';

	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			isProduction && gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
