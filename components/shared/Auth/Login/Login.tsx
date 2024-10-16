'use client';

import { Path } from 'react-hook-form';
import Link from 'next/link';

import Button from '@/components/ui/Button';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';

import Auth from '../Auth';

import loginFields from './loginFields';
import validationSchema from './loginValidationSchema';

import scss from './Login.module.scss';

interface ILoginData {
    email: string;
    password: string;
}

const Login = () => {
    const handleSubmit = (data: ILoginData) => {
        console.log(data);
    };
    return (
        <Auth variant="login">
            <Form<ILoginData> onSubmit={handleSubmit} validationSchema={validationSchema}>
                {(register, errors) => (
                    <>
                        <div className={scss.wrapper}>
                            {loginFields.map((field) => (
                                <Input<ILoginData>
                                    key={field.name}
                                    name={field.name as Path<ILoginData>}
                                    register={register}
                                    errors={errors}
                                    placeholder={field.placeholder}
                                    type={field.type}
                                />
                            ))}
                        </div>

                        <Button type="submit" fullWidth>
                            Log in
                        </Button>

                        <div className={scss.linkWrapper}>
                            <Link href="/register" className={scss.link}>
                                Don&apos;t have an account?
                            </Link>
                        </div>
                    </>
                )}
            </Form>
        </Auth>
    );
};

export default Login;
