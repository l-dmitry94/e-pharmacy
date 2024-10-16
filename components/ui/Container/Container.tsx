import { FC } from 'react';
import clsx from 'clsx';

import { IGeneral } from '@/types/general';

import scss from './Container.module.scss';

const Container: FC<IGeneral> = ({ children, className }) => {
    return <div className={clsx(scss.container, className)}>{children}</div>;
};

export default Container;
