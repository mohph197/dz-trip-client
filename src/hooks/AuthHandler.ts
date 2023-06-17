import { useState } from 'react';
import { useAuthContext } from './AuthContext';
import { UserType } from '@/context/AuthContext';
import { postCredentials } from '@/services/auth.service';
import { updateAccessToken } from '@/services/token.service';
import { getUserByToken, updateUser } from '@/services/user.service';

export const useAuthHandler = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const { updateCurrentUser } = useAuthContext();

	const handleCredentialsResponse = async (response: any) => {
		console.log(response.credential);
		setLoading(true);
		try {
			updateAccessToken(response.credential);
			const user = await getUserByToken();
			if (user) updateCurrentUser(user);
		} catch (e) {
			console.log(e);
		} finally {
			setLoading(false);
		}
	};

	return { loading, handleCredentialsResponse };
};
