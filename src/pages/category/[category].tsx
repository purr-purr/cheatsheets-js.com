import { FC, Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Heading from '@modules/common/heading';
import DescriptionText from '@modules/common/descriptionText';
import Meta from '@modules/common/meta';

import data from '@data/data.json';
import { ICheatsData } from '@utils/types';

const Category: FC = () => {
	const router = useRouter();
	const { category } = router.query;
	const [pageData, setPageData] = useState<ICheatsData>({
		category: '',
		id: 0,
		list: [
			{
				data: [{ source: '', subtitle: '' }],
				desc: '',
				icon: '',
				path: '',
				title: '',
			},
		],
		title: '',
	});

	useEffect(() => {
		if (!router.isReady) return;
		data.map(function (item: any) {
			if (item.category === category) {
				setPageData(item);
			}
		});
	}, [router.query.category, router.isReady]);

	return (
		<>
			<Meta title="Home" desc="Home" />

			<Heading text={pageData.title} />

			{pageData.list.map((item) => (
				<Fragment key={item.title}>
					<Heading text={item.title} isSubTitle />
					<DescriptionText text={item.desc} />

					{item.data.map((subItem) => (
						<Fragment key={subItem.subtitle}>
							<div>{subItem.subtitle}</div>
							<div>{subItem.source}</div>
						</Fragment>
					))}
				</Fragment>
			))}
		</>
	);
};

export default Category;
