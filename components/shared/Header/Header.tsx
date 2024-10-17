import { getServerSession } from 'next-auth';

import Container from '@/components/ui/Container';
import authOptions from '@/configs/next-auth';

import Logo from './Logo';
import UserNav from './UserNav';

import scss from './Header.module.scss';

const Header = async () => {
    const session = await getServerSession(authOptions);

    return (
        <header className={scss.header}>
            <Container className={scss.container}>
                <div className={scss.wrapper}>
                    <Logo />

                    <UserNav initialSession={session} />
                </div>
            </Container>
        </header>
    );
};

export default Header;
