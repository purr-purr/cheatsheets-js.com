import { FC, Fragment, memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Heading from '@modules/common/heading';
import DescriptionText from '@modules/common/descriptionText';
import Meta from '@modules/common/meta';

import data from '@data/data.json';
import { ICheatsData } from '@utils/types';
import {
	createMetaKeyWords,
	createTitleMeta,
	formatToAttr,
} from '@utils/index';

import Skeleton from '@modules/common/Skeleton';
import CodeFrame from '@modules/common/codeFrame';

// export const CodeFrame = styled.code`
// 	display: block;
// 	margin-bottom: 24px;
// `;

const Category: FC = memo(() => {
	const router = useRouter();
	const { category } = router.query;
	const initialState = {
		category: '',
		_id: 0,
		list: [
			{
				data: [{ _id: 0, source: '', subtitle: '' }],
				desc: '',
				icon: '',
				path: '',
				title: '',
			},
		],
		title: '',
		descMeta: '',
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
				title={createTitleMeta(pageData.title)}
				desc={pageData.descMeta}
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

							{item.data.map((subItem) => (
								<Fragment key={subItem._id}>
									{subItem.subtitle && (
										<Heading text={subItem.subtitle} isSubTitle />
									)}

									{iframeLoading && <Skeleton />}
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
