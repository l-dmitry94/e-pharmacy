import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

import { IGeneral } from '@/types/general';

import scss from './Button.module.scss';

interface IButton extends IGeneral, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    variant?: 'primary' | 'contained' | 'outlined' | 'secondary';
    fullWidth?: boolean;
}

const Button: FC<IButton> = ({ children, variant = 'primary', fullWidth, className, ...props }) => {
    return (
        <button
            className={clsx(scss.button, scss[variant], fullWidth && scss.fullWidth, className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
