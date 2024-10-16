import Container from '@/components/ui/Container';

import Logo from './Logo';

import scss from './Header.module.scss';

const Header = () => {
    return (
        <header className={scss.header}>
            <Container className={scss.container}>
                <div className={scss.wrapper}>
                    <Logo />
                </div>
            </Container>
        </header>
    );
};

export default Header;
