import { FullLocationType } from '@/services/locations.service';
import {
	FunctionComponent,
	ReactNode,
	createContext,
	useState,
} from 'react';

type LocationsProviderProps = {
	children: ReactNode;
};

type LocationsContextType = {
	locations: FullLocationType[];
	updateLocations: (locationsL: FullLocationType[]) => void;
};

export const LocationsContext = createContext<LocationsContextType>({
    locations: [],
    updateLocations: () => {},
});

export const LocationsProvider: FunctionComponent<LocationsProviderProps> = ({
	children,
}) => {
	const [locations, setLocations] = useState<FullLocationType[]>([]);

	const updateLocations = (locations: FullLocationType[]): void => {
		setLocations(locations);
	};

	return (
		<LocationsContext.Provider value={{ locations, updateLocations }}>
			{children}
		</LocationsContext.Provider>
	);
};
