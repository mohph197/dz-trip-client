import GeneralPhotos from '@/sections/Place/details/General';

import { NextPage } from 'next';
import PlaceDescription from '@/sections/Place/details/Description';
import Avis from '@/sections/Place/details/Avis';
import PlaceTransport from '@/sections/Place/details/Transport';
import PlaceActivities from '@/sections/Place/details/Activities';
import PlaceHotels from '@/sections/Place/details/hotels';
import PlaceRestos from '@/sections/Place/details/Resto';
import axios from '@/config/axios';
import { useState, useEffect } from 'react';
const PlaceDetails: NextPage = () => {

	const idLieu: number = 6;
	const [lieu, setLieu] = useState<any>({});
	function getLieu(){
		axios.get(`/lieux/${idLieu}`).then((res:any) => {
		  setLieu(res.data);
		  console.log(res.data);
		  
		});
	  };
	
	  // get lieuc 
	  useEffect(() => {
		getLieu();
	  },[]);
	  console.log(lieu);

	return (
		<div className='w-full pb-10 md:pb-24 bg-[#F5F5F5]'>
			<GeneralPhotos lieu = {lieu}/>
            <PlaceDescription lieu = {lieu}/>
            <Avis lieu = {lieu}/>
            <PlaceTransport lieu = {lieu}/>
			<PlaceActivities lieu = {lieu}/>
			<PlaceHotels lieu = {lieu}/>
			<PlaceRestos lieu = {lieu}/>
			
            
		</div>
	);
}

export default PlaceDetails;