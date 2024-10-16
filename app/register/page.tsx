import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import Register from '@/components/shared/Auth/Register';
import authOptions from '@/configs/next-auth';

const RegisterPage = async () => {
    const session = await getServerSession(authOptions);

    if (session) redirect('/create-shop');

    return <Register />;
};

export default RegisterPage;
