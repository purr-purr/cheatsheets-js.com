import type {AppProps} from 'next/app';

import Layout from '@modules/layout';

import '@styles/globals.scss';

export default function App({Component, pageProps}: AppProps) {
    console.log('test');
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
