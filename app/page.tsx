import { redirect } from 'next/navigation';

const HomePage = () => {
    redirect('/register');
};

export default HomePage;
