import { ReactNode } from 'react';
import { FieldErrors, FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ObjectSchema } from 'yup';

interface IForm<T extends FieldValues> {
    onSubmit: (data: T) => void;
    children: (
        register: UseFormRegister<T>,
        errors: FieldErrors<T>,
        isSubmitting: boolean
    ) => ReactNode;
    validationSchema: ObjectSchema<any>;
}

const Form = <T extends FieldValues>({ onSubmit, validationSchema, children }: IForm<T>) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<T>({
        mode: 'onBlur',
        resolver: yupResolver(validationSchema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>{children(register, errors, isSubmitting)}</form>
    );
};

export default Form;
