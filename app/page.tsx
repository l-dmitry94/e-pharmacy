import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import authOptions from '@/configs/next-auth';

const HomePage = async () => {
    const session = await getServerSession(authOptions);

    if (session) {
        redirect('/create-shop');
    } else {
        redirect('/register');
    }
};

export default HomePage;
