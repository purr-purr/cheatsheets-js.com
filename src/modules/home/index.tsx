import {useEffect, useState} from 'react';

import Logo from '@modules/common/logo';
import Meta from '@modules/common/meta';
import {
    createMetaDescHome,
    createMetaKeyWords,
    createMetaTitle
} from '@utils/index';

import data from '@data/data.json';
import messages from "@utils/messages";
import {useMediaQuery} from "@modules/common/hooks";
import {MOBILE_BREAKPOINT} from "@utils/const";

const Home = () => {
    const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
    const [titlesArr, setTitlesArr] = useState<any[]>([]);
    const uniqueTitlesArr = titlesArr.filter((v, i, a) => a.indexOf(v) === i);

    useEffect(() => {
        data.map(
            (item: any) => {
                if (!titlesArr.includes(item.title)) {
                    setTitlesArr((current) => [...current, item.title]);
                }
            }
        );
    }, []);

    return (
        <>
            <Meta
                title={createMetaTitle(messages.JAVA_SCRIPT)}
                desc={createMetaDescHome(uniqueTitlesArr)}
                keyWords={createMetaKeyWords(messages.JAVA_SCRIPT, uniqueTitlesArr)}
            />
            <Logo
                isFullView
                width={isMobile ? 320 : 680}
                height={isMobile ? 21 : 44}/>
        </>
    );
};

export default Home;