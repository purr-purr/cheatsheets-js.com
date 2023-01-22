import {FC, useEffect, useState} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import Image from 'next/image';
import cn from 'classnames';

import {formatToAttr} from '@utils/index';

import {IIsFullViewProps, INavPageItemProps} from '@utils/types';

import s from './NavItem.module.scss';

type Props = IIsFullViewProps & INavPageItemProps;

const NavItem: FC<Props> = ({title, path, isFullView}) => {
    const router = useRouter();
    const [isCheckRouter, setIsCheckRouter] = useState(false);
    const hash = formatToAttr(title);

    const getIconPath = (iconName: string) => {
        return require(`../../../../../public/assets/images/icons/nav-icon_${formatToAttr(
            iconName,
        )}.png`);
    };
    
    useEffect(() => {
            const itCurrentBlock = router.asPath.includes(hash);
            itCurrentBlock && router.push(path);
            setIsCheckRouter(false);
        },
        [isCheckRouter, router.asPath]);

    return (
        <li className={cn(s.container, isFullView && s[`container--fullView`])}>
            <Link
                href="/category/[category]"
                as={path}
                legacyBehavior
            >
                <a
                    onClick={() => setIsCheckRouter(true)}
                    className={cn(s.link, isFullView && s[`link--fullView`])}>
                    <Image
                        className={s.icon}
                        src={getIconPath(title)}
                        alt={`${title} icon`}
                        width={20}
                        height={20}
                    />

                    <p className={cn(s.title, isFullView && s[`title--fullView`])}>
                        {title}
                    </p>
                </a>
            </Link>
        </li>
    );
};

export default NavItem;
