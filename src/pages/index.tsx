import {useEffect, useState} from 'react';

import Logo from '@modules/common/components/Logo';
import Meta from '@modules/common/components/Meta';

import {useMediaQuery} from '@modules/common/hooks';

import data from '@data/data.json';
import {MOBILE_BREAKPOINT} from '@utils/const';
import messages from '@utils/messages';

const Home = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const [titlesArr, setTitlesArr] = useState<string[]>([]);
	const uniqueTitlesArr = titlesArr.filter((v, i, a) => a.indexOf(v) === i);

	useEffect(() => {
		data.map((item) => {
			!titlesArr.includes(item.title) &&
			setTitlesArr((current) => [...current, item.title]);
		});
	}, []);

	return (
		<>
			<Meta
				title={messages.JAVA_SCRIPT}
				desc={uniqueTitlesArr}
				keyWords={uniqueTitlesArr}
			/>
			<Logo width={isMobile ? 320 : 680} height={isMobile ? 21 : 44}/>
		</>
	);
};

export default Home;
