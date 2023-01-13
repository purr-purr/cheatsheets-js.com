import { FC, Fragment, memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Heading from '@modules/common/heading';
import DescriptionText from '@modules/common/descriptionText';
import Meta from '@modules/common/meta';
import CodeFrame from '@modules/common/codeFrame';

import data from '@data/data.json';
import { ICheatsData } from '@utils/types';
import {
	createMetaDescCommon,
	createMetaKeyWords,
	createMetaTitle,
	formatToAttr,
} from '@utils/index';

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

	const [iframeLoading, setIframeLoading] = useState(true);

	return (
		<>
			<Meta
				title={createMetaTitle(pageData.title)}
				desc={createMetaDescCommon(pageData.title)}
				keyWords={createMetaKeyWords(pageData.title, titlesArr)}
			/>

			<Heading text={pageData.title} />

			{pageData.list.map(
				(item) =>
					item.data[0].source.length > 1 && (
						<Fragment key={item.title}>
							<Heading
								text={item.title}
								isSubTitle
								idAttr={`${formatToAttr(item.title)}`}
							/>

							{item.desc && <DescriptionText text={item.desc} />}

							{item.data.map((subItem, index) => (
								<Fragment key={index.toString()}>
									{subItem.subtitle && (
										<Heading text={subItem.subtitle} isSubTitle />
									)}
									<CodeFrame
										iframeLoading={iframeLoading}
										onLoad={() => {
											setIframeLoading(false);
										}}
										source={subItem.source}
									/>
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
