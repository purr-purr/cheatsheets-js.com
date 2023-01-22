import {FC, Fragment} from 'react';
import cn from 'classnames';
import NavItem from '@modules/common/nav/navItem';
import {INavGroupProps} from '@utils/types';
import {formatToAttr} from "@utils/index";

import {DYNAMIC_PAGE_CATALOG_NAME} from "@utils/const";

import s from './NavGroup.module.scss';

const NavGroup: FC<INavGroupProps> = ({title, list, isFullView, category}) => {
    return (
        <details className={s.container} open>
            <summary
                className={cn(s.heading, isFullView && s[`heading--fullView`])}>
                {title}
            </summary>
            <ul className={cn(s.list, isFullView && s[`list--fullView`])}>
                {list.map(
                    (item: any) =>
                        item.data[0].source.length > 1 && (
                            <Fragment key={item.title}>
                                <NavItem
                                    title={item.title}
                                    path={`/${DYNAMIC_PAGE_CATALOG_NAME}/${category}`}
                                    hash={formatToAttr(item.title)}
                                    isFullView={isFullView}
                                />
                            </Fragment>
                        ),
                )}
            </ul>
        </details>
    );
};

export default NavGroup;
