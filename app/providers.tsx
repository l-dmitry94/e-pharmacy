'use client';

import { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

import toastifyConfig from '@/configs/react-hot-toast';

interface IProviders {
    children: ReactNode;
}

const Providers: FC<IProviders> = ({ children }) => {
    return (
        <SessionProvider>
            {children}

            <Toaster toastOptions={toastifyConfig} />
        </SessionProvider>
    );
};

export default Providers;
