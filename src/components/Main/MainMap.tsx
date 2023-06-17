import { FunctionComponent, useCallback, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';
import { getLocations } from '@/services/locations.service';
import { useLocationsContext } from '@/hooks/LocationsContext';
import LocationsPins from './Locations/LocationsPins';

type MainMapProps = {
	className: string;
};

const UpdateMap = () => {
	const { updateLocations } = useLocationsContext();
	const map = useMap();

	const getLocationsWithinBounds = useCallback(
		async (map: Leaflet.Map) => {
			const bounds = map.getBounds();

			updateLocations(
				await getLocations({
					startLat: bounds.getNorth(),
					endLat: bounds.getSouth(),
					startLng: bounds.getWest(),
					endLng: bounds.getEast(),
				})
			);
		},
		[updateLocations]
	);

	useMapEvents({
		load: () => getLocationsWithinBounds(map),
		moveend: () => getLocationsWithinBounds(map),
	});

	useEffect(() => {
		map.setView([28.0289837, 1.6666663], 5);
	}, [map]);

	return null;
};

const MainMap: FunctionComponent<MainMapProps> = ({ className }) => {
	return (
		<div className={className}>
			<MapContainer scrollWheelZoom={true} className='h-full w-full isolate'>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<UpdateMap />
				<LocationsPins />
			</MapContainer>
		</div>
	);
};

export default MainMap;
