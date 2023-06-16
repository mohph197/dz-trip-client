import { useLocationsContext } from '@/hooks/LocationsContext';
import Image from 'next/image';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import LocationCard from './Locations/LocationCard';
import { useOutClickHandler } from '@/hooks/OutClickHandler';

const LocationMenu: FunctionComponent = () => {
	const { locations } = useLocationsContext();
	const [sideManuOpen, setSideMenuOpen] = useState<boolean>(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const clickOutMenu = useOutClickHandler(menuRef, sideManuOpen);

	const toggleSideMenu = () => {
		setSideMenuOpen(!sideManuOpen);
	};

	useEffect(() => {
		if (clickOutMenu) setSideMenuOpen(false);
	}, [clickOutMenu]);

	return (
		<div
			className={`absolute top-16 md:top-20 bottom-0 left-0 bg-[#a6a6a6] bg-opacity-30 backdrop-blur z-20 transition-transform ${
				sideManuOpen ? '' : 'translate-x-[calc(-1*(100%-1.25rem))]'
			}`}
			ref={menuRef}
		>
			<div className='px-8 overflow-y-scroll overflow-x-visible no-scrollbar h-full'>
				<div className='flex flex-col gap-8 py-16 h-max'>
					{locations.map((location) => (
						<LocationCard key={location.id} location={location} />
					))}
				</div>
			</div>
			<button
				className={`absolute -right-4 top-8 w-8 aspect-square ${
					sideManuOpen ? 'rotate-180' : ''
				}`}
				onClick={toggleSideMenu}
			>
				<Image
					src='/assets/images/side-menu-arrow.svg'
					alt='Slide Arrow'
					fill
					className='object-contain'
				/>
			</button>
		</div>
	);
};

export default LocationMenu;
