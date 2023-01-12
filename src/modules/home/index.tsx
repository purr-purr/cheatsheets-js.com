import { useEffect, useState } from 'react';

import Logo from '@modules/common/logo';
import Meta from '@modules/common/meta';
import { createMetaKeyWords, createTitleMeta } from '@utils/index';

import data from '@data/data.json';

const Home = () => {
	const homePageMetaTitle = 'Home Page JavaScript';
	const [titlesArr, setTitlesArr] = useState<any[]>([]);

	useEffect(() => {
		data.map(
			(item: any) =>
				!titlesArr.includes(item.title) &&
				setTitlesArr((current) => [...current, item.title]),
		);
	}, []);

	return (
		<>
			<Meta
				title={createTitleMeta(homePageMetaTitle)}
				desc="Home"
				keyWords={createMetaKeyWords(homePageMetaTitle, titlesArr)}
			/>
			<Logo isFullView />
		</>
	);
};

export default Home;
