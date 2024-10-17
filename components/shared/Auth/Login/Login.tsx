'use client';

import { Path } from 'react-hook-form';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import Button from '@/components/ui/Button';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import { ILoginData } from '@/types/auth';

import Auth from '../Auth';

import loginFields from './loginFields';
import validationSchema from './loginValidationSchema';

import scss from './Login.module.scss';

const Login = () => {
    const router = useRouter();

    const handleSubmit = async (data: ILoginData) => {
        const signInResponse = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        if (signInResponse?.ok) {
            toast.success('Logged in successfully');
            router.replace('/create-shop');
        } else {
            if (signInResponse?.error) {
                toast.error(signInResponse.error);
            }
        }
    };

    return (
        <Auth variant="login">
            <Form<ILoginData> onSubmit={handleSubmit} validationSchema={validationSchema}>
                {(register, errors, isSubmitting) => (
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

                        <div className={scss.buttonWrapper}>
                            <Button type="submit" loading={isSubmitting} fullWidth>
                                Log in
                            </Button>

                            <div className={scss.linkWrapper}>
                                <Link href="/register" className={scss.link}>
                                    Don&apos;t have an account?
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </Form>
        </Auth>
    );
};

export default Login;
