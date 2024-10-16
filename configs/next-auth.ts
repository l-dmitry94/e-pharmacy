import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcrypt';
import { AuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { ILoginData } from '@/types/auth';

import prisma from './prisma';

const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            name: 'credentials',

            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials as ILoginData;

                const user = await prisma.user.findUnique({
                    where: {
                        email,
                    },
                });

                if (!user || !(await bcrypt.compare(password, user.password!))) {
                    throw new Error('Email or password is wrong');
                }

                return user as User;
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.phone = user.phone;
            }

            return token;
        },

        async session({ session }) {
            const user = await prisma.user.findUnique({
                where: {
                    email: session.user?.email || '',
                },
            });

            if (!user) {
                throw new Error('User not found');
            }

            session.user.id = user.id;
            session.user.phone = user.phone ?? '';

            return session;
        },
    },

    session: {
        strategy: 'jwt',
    },

    secret: process.env.NEXTAUTH_SECRET,

    pages: {
        signIn: '/login',
    },
};

export default authOptions;
