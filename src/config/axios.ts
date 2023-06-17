import { getAccessToken } from '@/services/token.service';
import Axios from 'axios';

const axios = Axios.create({
	baseURL: process.env.NEXT_PUBLIC_GATEWAY_URL,
});

axios.interceptors.request.use((config) => {
	const token = getAccessToken();
	config.headers.Authorization = `Bearer ${token}`;
	return config;
});

export default axios;
