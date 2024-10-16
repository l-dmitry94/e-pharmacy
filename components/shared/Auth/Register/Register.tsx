'use client';

import { Path } from 'react-hook-form';
import toast from 'react-hot-toast';
import { isAxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import Button from '@/components/ui/Button';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import { signup } from '@/services/auth.api';
import { IRegisterData } from '@/types/auth';

import Auth from '../Auth';

import registerFields from './registerFields';
import validationSchema from './registerValidationSchema';

import scss from './Register.module.scss';

const Register = () => {
    const router = useRouter();

    const handleSubmit = async (data: IRegisterData) => {
        try {
            const response = await signup(data);

            if (response.status === 201) {
                toast.success(response.data.message);

                const signInResponse = await signIn('credentials', {
                    email: data.email,
                    password: data.password,
                    redirect: false,
                });

                if (signInResponse?.ok) {
                    router.replace('/create-shop');
                }
            }
        } catch (error) {
            if (isAxiosError(error)) {
                toast.error(error.response?.data.message);
            }
        }
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
