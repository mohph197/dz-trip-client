const tokenKey = '@token';

export const getAccessToken = () => {
	return localStorage.getItem(tokenKey);
};

export const updateAccessToken = (token: string) => {
	localStorage.setItem(tokenKey, token);
};

export const removeAccessToken = () => {
	localStorage.removeItem(tokenKey);
};
