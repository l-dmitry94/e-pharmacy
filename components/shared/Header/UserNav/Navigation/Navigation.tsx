import { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IGeneral } from '@/types/general';

import navItems from './navigations.json';

import scss from './Navigation.module.scss';

const Navigation: FC<IGeneral> = ({ className }) => {
    const pathname = usePathname();

    return (
        <div className={clsx(scss.navigation, className)}>
            <ul className={scss.navigationList}>
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <li key={item.label} className={scss.listItem}>
                            <Link
                                href={item.href}
                                className={clsx(scss.link, isActive && scss.active)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navigation;
