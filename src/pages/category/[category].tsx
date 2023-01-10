import { FC, Fragment, memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Heading from '@modules/common/heading';
import DescriptionText from '@modules/common/descriptionText';
import Meta from '@modules/common/meta';

import data from '@data/data.json';
import { ICheatsData } from '@utils/types';
import { createMetaKeyWords, createTitleMeta } from '@utils/index';

export const CodeFrame = styled.code`
	display: block;
	margin-bottom: 24px;
`;

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

	return (
		<>
			<Meta
				title={createTitleMeta(pageData.title)}
				desc={pageData.descMeta}
				keyWords={createMetaKeyWords(pageData.title, titlesArr)}
			/>

			<Heading text={pageData.title} />

			{pageData.list.map((item) => (
				<Fragment key={item.title}>
					<Heading
						text={item.title}
						isSubTitle
						idAttr={`${item.title.toLowerCase()}`}
					/>

					{item.desc && <DescriptionText text={item.desc} />}

					{item.data.map((subItem) => {
						const createMarkup = () => {
							return {
								__html: subItem.source,
							};
						};

						return (
							<Fragment key={subItem._id}>
								{subItem.subtitle && (
									<Heading text={subItem.subtitle} isSubTitle />
								)}
								<CodeFrame dangerouslySetInnerHTML={createMarkup()} />
							</Fragment>
						);
					})}
				</Fragment>
			))}
		</>
	);
});
Category.displayName = 'Category';
export default Category;
