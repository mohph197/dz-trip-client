import axios from '@/config/axios';

export const postCredentials = async (credential: string) => {
	const res = await axios.post('/auth', JSON.stringify({ credential }));
	return res;
};
