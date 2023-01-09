import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useIsHomePage = () => {
	const [homePage, setHomePage] = useState(false);
	const { pathname } = useRouter();

	useEffect(() => {
		pathname === '/' ? setHomePage(true) : setHomePage(false);
	}, [pathname]);

	return homePage;
};

export default useIsHomePage;
