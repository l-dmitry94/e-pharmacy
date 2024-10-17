'use client';

import { FC, useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';

import Icon from '@/components/ui/Icon';

import Logout from './Logout';
import Navigation from './Navigation';

import 'react-modern-drawer/dist/index.css';
import scss from './UserNav.module.scss';

interface IUserNav {
    initialSession: Session | null;
}

const UserNav: FC<IUserNav> = ({ initialSession }) => {
    const { data: clientSession } = useSession(); // Отримуємо сесію на клієнті
    const session = clientSession || initialSession;

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1440) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {session && (
                <div className={scss.userNav}>
                    <div className={scss.userNavDesktop}>
                        <Navigation className={scss.navigation} />
                        <Logout />
                    </div>

                    <div className={scss.userNavWrapper}>
                        <button onClick={toggleDrawer} className={scss.burger}>
                            <Icon variant="burger" className={scss.burgerIcon} />
                        </button>

                        <Drawer
                            open={isOpen}
                            onClose={toggleDrawer}
                            direction="right"
                            lockBackgroundScroll
                            className={scss.drawer}
                        >
                            <div className={scss.drawerContent}>
                                <button onClick={toggleDrawer} className={scss.close}>
                                    <Icon variant="close" className={scss.closeIcon} />
                                </button>

                                <Navigation />

                                <Logout />
                            </div>
                        </Drawer>
                    </div>
                </div>
            )}
        </>
    );
};

export default UserNav;
