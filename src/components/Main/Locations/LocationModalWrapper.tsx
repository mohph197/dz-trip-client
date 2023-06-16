import { useLocationModalContext } from '@/hooks/LocationModalContext';
import { FunctionComponent } from 'react';

const LocationModalWrapper: FunctionComponent = () => {
	const { CurrentModal } = useLocationModalContext();

	return <>{CurrentModal}</>;
};

export default LocationModalWrapper;
