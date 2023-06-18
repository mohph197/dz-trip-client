import { UserType } from '@/context/AuthContext';
import { getAccessToken } from './token.service';
import { postCredentials } from './auth.service';

const userKey = '@user';

export const getUserByToken = async (): Promise<UserType | null> => {
	const token = getAccessToken();
	if (!token) return null;
	try {
		const res = await postCredentials(token);
		const user = res.data;
		return user;
	} catch (e) {
		console.log(e);
		return null;
	}
};

export const getUserInfo = (): UserType | null => {
	const userJson = localStorage.getItem(userKey);
	if (userJson) {
		return JSON.parse(userJson);
	}
	return null;
};

export const updateUser = (user: UserType) => {
	localStorage.setItem(userKey, JSON.stringify(user));
};

export const removeUser = () => {
	localStorage.removeItem(userKey);
};
