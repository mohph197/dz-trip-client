import LocationModalWrapper from '@/components/Main/Locations/LocationModalWrapper';
import LocationMenu from '@/components/Main/LocationsMenu';
import OperationsLayout from '@/components/shared/OperationsLayout';
import { LocationModalProvider } from '@/context/LocationModalContext';
import { LocationsProvider } from '@/context/LocationsContext';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const MainMap = dynamic(() => import('@/components/Main/MainMap'), {
	ssr: false,
});

const Map: NextPage = () => {
	return (
		<LocationsProvider>
			<OperationsLayout
				pageName='main'
				className='h-screen overflow-hidden'
				externalElement={<LocationMenu />}
			>
				<MainMap className='h-full w-full' />
			</OperationsLayout>
		</LocationsProvider>
	);
};

export default Map;
