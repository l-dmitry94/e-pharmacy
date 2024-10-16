import Link from 'next/link';

import { logo } from '@/public/images/header';

import scss from './Logo.module.scss';

const Logo = () => {
    return (
        <Link href="/" className={scss.logo}>
            <img src={logo.src} alt="E-Pharmacy logo" className={scss.logoIcon} />
            <span className={scss.logoText}>E-Pharmacy</span>
        </Link>
    );
};

export default Logo;
