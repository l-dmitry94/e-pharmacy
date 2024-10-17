import React from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import authOptions from '@/configs/next-auth';

const StatisticsPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session) redirect('/login');

    return <div>StatisticsPage</div>;
};

export default StatisticsPage;
