import Head from 'next/head';
import s from './Home.module.scss';
import Logo from '@modules/common/logo';

const Home = () => {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/public/assets/images/favicon.ico" />
			</Head>

			<main className={s.main}>
				<Logo />
			</main>
		</>
	);
};

export default Home;
