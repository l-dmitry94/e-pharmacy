import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import Login from '@/components/shared/Auth/Login';
import authOptions from '@/configs/next-auth';

const LoginPage = async () => {
    const session = await getServerSession(authOptions);

    if (session) redirect('/create-shop');
    return <Login />;
};

export default LoginPage;
