import { DefaultSession } from 'next-auth';

import 'next-auth';

declare module 'next-auth' {
    interface User {
        phone: string;
    }
    interface Session {
        user: User & DefaultSession['user'];
    }
}
