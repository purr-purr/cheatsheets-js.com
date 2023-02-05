import { FC, Fragment, memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import CodeFrame from '@modules/code/components/CodeFrame';
import DescriptionText from '@modules/common/components/DescriptionText';
import Heading from '@modules/common/components/Heading';
import Meta from '@modules/common/components/Meta';

import data from '@data/data.json';

import { ICheatsData } from '@modules/common/types';

const Category: FC = memo(() => {
	const router = useRouter();
	const { category } = router.query;
	const initialState = {
		category: '',
		_id: 0,
		list: [
			{
				data: [{ source: '', subtitle: '' }],
				desc: '',
				title: '',
			},
		],
		title: '',
	};
	const [pageData, setPageData] = useState<ICheatsData>(initialState);

	useEffect(() => {
		if (!router.isReady) return;
		data.map((item: any) => item.category === category && setPageData(item));
	}, [router.query.category, router.isReady]);

	const [titlesArr, setTitlesArr] = useState<any[]>([]);

	useEffect(() => {
		if (pageData._id !== 0) {
			pageData.list.map(
				(item: any) =>
					!titlesArr.includes(item.title) &&
					setTitlesArr((current) => [...current, item.title]),
			);
		}
	}, [pageData]);

	return (
		<>
			<Meta title={pageData.title} desc={pageData.title} keyWords={titlesArr} />
			<Heading text={pageData.title} />

			{pageData.list.map(
				(item) =>
					item.data[0].source.length > 1 && (
						<Fragment key={item.title}>
							<Heading text={item.title} isSubTitle />

							{item.desc && <DescriptionText text={item.desc} />}

							{item.data.map((subItem, index) => (
								<Fragment key={subItem.source + index}>
									{subItem.subtitle && <Heading text={subItem.subtitle} isSubTitle />}
									<CodeFrame source={subItem.source} />
								</Fragment>
							))}
						</Fragment>
					),
			)}
		</>
	);
});
Category.displayName = 'Category';
export default Category;
