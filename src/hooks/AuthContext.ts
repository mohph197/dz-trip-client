import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';

export const useAuthContext = () => {
	if (AuthContext) {
		return useContext(AuthContext);
	} else {
		throw new Error('AuthProvider is required');
	}
};
