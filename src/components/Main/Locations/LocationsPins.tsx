import { useLocationsContext } from '@/hooks/LocationsContext';
import { FunctionComponent } from 'react';
import { Marker } from 'react-leaflet';
import Leaflet from 'leaflet';
import { useLocationModalContext } from '@/hooks/LocationModalContext';
import LocationModal from './LocationModal';

const LocationsPins: FunctionComponent = () => {
	const { locations } = useLocationsContext();
	const { openModal } = useLocationModalContext();

	return (
		<>
			{locations.map((location) => (
				<Marker
					key={location.id}
					position={[location.lat, location.lng]}
					icon={Leaflet.icon({
						iconUrl: '/assets/images/marker.svg',
						iconAnchor: [12, 41],
					})}
					eventHandlers={{
						click: () => {
							openModal(<LocationModal location={location} />);
						},
					}}
					riseOnHover
				></Marker>
			))}
		</>
	);
};

export default LocationsPins;
