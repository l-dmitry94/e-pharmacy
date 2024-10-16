'use client';

import { Path } from 'react-hook-form';
import Link from 'next/link';

import Button from '@/components/ui/Button';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';

import Auth from '../Auth';

import registerFields from './registerFields';
import validationSchema from './registerValidationSchema';

import scss from './Register.module.scss';

interface IRegisterData {
    name: string;
    email: string;
    phone: string;
    password: string;
}

const Register = () => {
    const handleSubmit = (data: IRegisterData) => {
        console.log(data);
    };

    return (
        <Auth variant="register">
            <Form<IRegisterData> onSubmit={handleSubmit} validationSchema={validationSchema}>
                {(register, errors) => (
                    <>
                        <div className={scss.wrapper}>
                            {registerFields.map((field) => (
                                <Input<IRegisterData>
                                    key={field.name}
                                    name={field.name as Path<IRegisterData>}
                                    register={register}
                                    errors={errors}
                                    placeholder={field.placeholder}
                                    type={field.type}
                                />
                            ))}
                        </div>

                        <div className={scss.buttonWrapper}>
                            <Button type="submit" fullWidth className={scss.button}>
                                Register
                            </Button>

                            <div className={scss.linkWrapper}>
                                <Link href="/login" className={scss.link}>
                                    Already have an account?
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </Form>
        </Auth>
    );
};

export default Register;
