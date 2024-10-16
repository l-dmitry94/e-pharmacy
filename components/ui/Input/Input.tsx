import { FocusEvent, InputHTMLAttributes, useState } from 'react';
import { FieldValues, Path } from 'react-hook-form';
import clsx from 'clsx';

import { IForm } from '@/types/form';

import scss from './Input.module.scss';

interface IInput<T extends FieldValues>
    extends IForm<T>,
        Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
    name: Path<T>;
    label?: string;
}

const Input = <T extends FieldValues>({ name, label, register, errors, ...props }: IInput<T>) => {
    const [isTouched, setIsTouched] = useState(false);

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
        setIsTouched(true);
        register(name).onBlur?.(event);
    };
    return (
        <div>
            {label && <label className={scss.label}>{label}</label>}
            <div className={scss.inputWrapper}>
                <input
                    autoComplete="off"
                    className={clsx(
                        scss.input,
                        isTouched && (errors[name] ? scss.error : scss.success)
                    )}
                    {...register(name)}
                    onBlur={handleBlur}
                    {...props}
                />
                {isTouched && errors[name] && (
                    <p className={scss.error}>{errors[name].message as string}</p>
                )}
            </div>
        </div>
    );
};

export default Input;
