import axios from '@/config/axios';
import { UserType } from '@/context/AuthContext';

export const postCredentials = async (credential: string) => {
	const res = await axios.post<UserType>('/auth', { credential });
	return res;
};
