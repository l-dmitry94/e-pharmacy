import { IRegisterData } from '@/types/auth';

import instance from './axios.config';
import ENDPOINTS from './endpoints';

export const signup = async (data: IRegisterData) => {
    return await instance.post(ENDPOINTS.auth.signup, data);
};
