import { removeAccessToken } from '@/services/token.service';
import {
	getUserByToken,
	getUserInfo,
	removeUser,
	updateUser,
} from '@/services/user.service';
import { useRouter } from 'next/router';
import {
	FunctionComponent,
	ReactNode,
	createContext,
	useCallback,
	useEffect,
	useState,
} from 'react';

type AuthContextProviderProps = {
	children: ReactNode;
};

type AuthContextType = {
	currentUser?: UserType;
	authLoading: boolean;
	updateCurrentUser: (user: UserType) => void;
	logOut: () => void;
};

export type UserType = {
	name: string;
	email: string;
};

export const AuthContext = createContext<AuthContextType>({
	authLoading: true,
	updateCurrentUser: () => {},
	logOut: () => {},
});

export const AuthProvider: FunctionComponent<AuthContextProviderProps> = ({
	children,
}) => {
	const [currentUser, setCurrentUser] = useState<UserType | undefined>(
		undefined
	);
	const [redirectRoute, setRedirectRoute] = useState<string>('/');
	const [authLoading, setAuthLoading] = useState<boolean>(true);
	const { route, replace } = useRouter();

	const updateCurrentUser = (user: UserType) => {
		updateUser(user);
		setCurrentUser(user);
	};
	const removeCurrentUser = () => {
		removeUser();
		setCurrentUser(undefined);
	};

	useEffect(() => {
		console.log('Handle Auth Effect Called!');

		const handleAuth = async () => {
			setAuthLoading(true);
			let user = getUserInfo();
			if (user) {
				setCurrentUser(user);
				setAuthLoading(false);
			}
			user = await getUserByToken();
			await new Promise((resolve) => {
				setTimeout(() => resolve(''), 5000);
			});
			if (user) {
				updateCurrentUser(user);
			} else {
				removeCurrentUser();
			}
			setAuthLoading(false);
		};

		handleAuth();
	}, []);

	const logOut = () => {
		removeAccessToken();
		removeCurrentUser();
	};

	useEffect(() => {
		console.log('User and route changes called!');

		const updateRedirectRoute = () => setRedirectRoute(route);

		const updateRoute = async () => {
			if (currentUser) {
				if (route === '/connection') {
					await replace(redirectRoute);
				}
			} else if (route !== '/connection') {
				updateRedirectRoute();
				await replace('/connection');
			}
		};

		if (authLoading) return;
		updateRoute();
	}, [currentUser, route, redirectRoute, authLoading, replace]);

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				authLoading,
				logOut,
				updateCurrentUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};