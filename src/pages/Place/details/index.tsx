import GeneralPhotos from '@/sections/Place/details/General';

import { NextPage } from 'next';
import PlaceDescription from '@/sections/Place/details/Description';
import Avis from '@/sections/Place/details/Avis';
import PlaceTransport from '@/sections/Place/details/Transport';
import PlaceActivities from '@/sections/Place/details/Activities';
import PlaceHotels from '@/sections/Place/details/hotels';
import PlaceRestos from '@/sections/Place/details/Resto';

const PlaceDetails: NextPage = () => {
	return (
		<div className='w-full pb-10 md:pb-24 bg-[#F5F5F5]'>
			<GeneralPhotos/>
            <PlaceDescription/>
            <Avis/>
            <PlaceTransport/>
			<PlaceActivities/>
			<PlaceHotels/>
			<PlaceRestos/>
			
            
		</div>
	);
}

export default PlaceDetails;