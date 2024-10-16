import { FC } from 'react';
import clsx from 'clsx';

import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import { pill_1x, pill_2x } from '@/public/images/auth';
import { IGeneral } from '@/types/general';

import scss from './Auth.module.scss';

interface IAuth extends IGeneral {
    variant?: 'login' | 'register';
}

const Auth: FC<IAuth> = ({ children, variant = 'register', className }) => {
    return (
        <section className={clsx(scss.auth, className)}>
            <Container className={scss.container}>
                <div className={clsx(scss.innerWrapper, scss[variant])}>
                    <div className={scss.wrapper}>
                        <h1 className={scss.title}>
                            Your medication, delivered Say goodbye to all{' '}
                            <span className={scss.titleColor}>your healthcare</span> worries with us
                        </h1>
                        <img
                            src={pill_1x.src}
                            srcSet={`${pill_1x.src} 1x, ${pill_2x.src} 2x`}
                            alt="Pill"
                            className={scss.pill}
                        />
                    </div>

                    {children}
                </div>
            </Container>

            <Icon variant="elements" className={scss.icon} />
        </section>
    );
};

export default Auth;
