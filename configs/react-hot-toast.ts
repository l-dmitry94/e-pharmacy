import { DefaultToastOptions } from 'react-hot-toast';

const toastifyConfig: DefaultToastOptions = {
    duration: 3000,
    position: 'top-right',
    error: {
        style: {
            background: '#f44336',
            color: '#fff',
        },
    },
    success: {
        style: {
            background: '#4caf50',
            color: '#fff',
        },
    },
};

export default toastifyConfig;
