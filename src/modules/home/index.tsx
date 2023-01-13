import { useEffect, useState } from 'react';

import Logo from '@modules/common/logo';
import Meta from '@modules/common/meta';
import {
	createMetaDescHome,
	createMetaKeyWords,
	createMetaTitle
} from '@utils/index';

import data from '@data/data.json';
import messages from "@utils/messages";

const Home = () => {
	const [titlesArr, setTitlesArr] = useState<any[]>([]);
	let uniqueTitlesArr = titlesArr.filter((v, i, a) => a.indexOf(v) === i);


	useEffect(() => {
		data.map(
			(item: any) => {
				if(!titlesArr.includes(item.title)) {
					setTitlesArr((current) => [...current, item.title]);
				}
			}
		);
	}, []);
	
	return (
		<>
			<Meta
				title={createMetaTitle(messages.HOME_PAGE_JAVA_SCRIPT)}
				desc={createMetaDescHome(uniqueTitlesArr)}
				keyWords={createMetaKeyWords(messages.HOME_PAGE_JAVA_SCRIPT, uniqueTitlesArr)}
			/>
			<Logo isFullView />
		</>
	);
};

export default Home;
