import { UserType } from '@/context/AuthContext';
import { getAccessToken } from './token.service';
import { postCredentials } from './auth.service';

const userKey = '@user';

export const getUserByToken = async () => {
	const token = getAccessToken();
	if (!token) return null;
	try {
		console.log('Launching backend request!');
		// const res = await postCredentials(token);
		// const user = res.data.user;
		const user = await new Promise<UserType>((resolve) => {
			setTimeout(
				() =>
					resolve({
						email: 'mohtiri718@gmail.com',
						name: 'mohammed',
					}),
				2000
			);
		});
		console.log('Backend request done!');
		return user;
	} catch (e) {
		console.log(e);
		return null;
	}
};

export const getUserInfo = () => {
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
