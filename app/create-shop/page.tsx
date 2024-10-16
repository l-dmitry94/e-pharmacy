import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import authOptions from '@/configs/next-auth';

const CreateShopPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session) redirect('/login');

    return <div>CreateShopPage</div>;
};

export default CreateShopPage;
