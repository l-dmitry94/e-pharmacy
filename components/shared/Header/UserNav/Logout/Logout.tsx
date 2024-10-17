import { signOut } from 'next-auth/react';

import Button from '@/components/ui/Button';

import scss from './Logout.module.scss';

const Logout = () => {
    return (
        <div className={scss.buttonWrapper}>
            <Button variant="outlined" onClick={() => signOut()} className={scss.button}>
                Log out
            </Button>
        </div>
    );
};

export default Logout;
