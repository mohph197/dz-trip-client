import { FullLocationType } from '@/services/locations.service';
import { FunctionComponent } from 'react';
import Image from 'next/image';

type LocationCardProps = {
	location: FullLocationType;
};

const LocationCard: FunctionComponent<LocationCardProps> = ({
	location: { name, rating, nbrRatings, category, imgSrc },
}) => {
	return (
		<div className='flex flex-col w-60 items-start bg-white rounded-xl overflow-hidden p-2'>
			<div className='relative w-full rounded-xl overflow-hidden aspect-[331/194]'>
				<Image src={imgSrc} alt={name} fill className='object-cover' />
			</div>
			<h3 className='font-semibold text-lg'>{name}</h3>
			<p className='font-light'>
				{rating}⭐({nbrRatings})
			</p>
			<h5 className='text-xs text-text-gray'>{category}</h5>
		</div>
	);
};

export default LocationCard;
