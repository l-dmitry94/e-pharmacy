import { ButtonHTMLAttributes, FC } from 'react';
import { MoonLoader } from 'react-spinners';
import clsx from 'clsx';

import { IGeneral } from '@/types/general';

import scss from './Button.module.scss';

interface IButton extends IGeneral, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    variant?: 'primary' | 'contained' | 'outlined' | 'secondary';
    loading?: boolean;
    fullWidth?: boolean;
}

const Button: FC<IButton> = ({
    children,
    variant = 'primary',
    fullWidth,
    loading,
    className,
    ...props
}) => {
    return (
        <button
            className={clsx(scss.button, scss[variant], fullWidth && scss.fullWidth, className)}
            disabled={loading}
            {...props}
        >
            {children}
            {loading && <MoonLoader size={16} loading={loading} color="#1d1e21" />}
        </button>
    );
};

export default Button;
