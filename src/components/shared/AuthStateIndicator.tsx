import { useAuthContext } from '@/hooks/AuthContext';
import { FunctionComponent, ReactNode } from 'react';
import PageSection from './PageSection';

type AuthStateIndicatorProps = {
	children: ReactNode;
};

const AuthStateIndicator: FunctionComponent<AuthStateIndicatorProps> = ({
	children,
}) => {
	const { authLoading } = useAuthContext();

	return authLoading ? (
		<PageSection name='loading' className='flex justify-center items-center'>
			<h1>Loading!</h1>
		</PageSection>
	) : (
		<>{children}</>
	);
};

export default AuthStateIndicator;
