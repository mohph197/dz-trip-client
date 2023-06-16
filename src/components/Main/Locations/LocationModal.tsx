import { FullLocationType } from '@/services/locations.service';
import { FunctionComponent, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocationModalContext } from '@/hooks/LocationModalContext';
import { useOutClickHandler } from '@/hooks/OutClickHandler';

type LocationModalProps = {
	location: FullLocationType;
};

const LocationModal: FunctionComponent<LocationModalProps> = ({
	location: {
		name,
		rating,
		nbrRatings,
		category,
		imgSrc,
		address,
		description,
		openingTime,
		closingTime,
	},
}) => {
	const { closeModal } = useLocationModalContext();

	const locationIsOpen = () => {
		if (!openingTime || !closingTime) return;
		const now = new Date().getTime();
		return now >= openingTime.getTime() && now < closingTime.getTime();
	};

	return (
		<div className='fixed inset-0 flex justify-center items-center z-50 bg-white bg-opacity-10 backdrop-blur isolate'>
			<div className='absolute inset-0 -z-10' onClick={closeModal}></div>
			<div className='relative bg-white rounded-3xl shadow-md overflow-hidden w-[min(24rem,80vw)] flex flex-col items-stretch pb-5 gap-2'>
				<button
					className='absolute top-5 right-5 z-10 bg-text-red text-white rounded-lg w-7 aspect-square flex justify-center items-center'
					onClick={closeModal}
				>
					<i className='fa-solid fa-xmark fa-lg'></i>
				</button>
				<div className='relative w-full aspect-video'>
					<Image src={imgSrc} alt={name} fill className='object-cover' />
				</div>
				<div className='px-3 flex justify-between items-center'>
					<h2 className='font-semibold'>{name}</h2>
					<p className='font-light'>
						{rating} ⭐ ({nbrRatings})
					</p>
				</div>
				<div className='px-3 flex gap-1 items-center'>
					<div className='relative w-3 aspect-square'>
						<Image
							src='/assets/images/address-marker.svg'
							alt='Address Marker'
							fill
							className='object-contain'
						/>
					</div>
					<p className='font-light text-xs whitespace-nowrap overflow-hidden text-ellipsis w-2/5'>
						{address}
					</p>
					<div className='flex-1'></div>
					{openingTime && closingTime && (
						<>
							<div
								className={`min-w-[0.7rem] min-h-[0.7rem] rounded-full ${
									locationIsOpen() ? 'bg-primary' : 'bg-text-red'
								}`}
							></div>
							<p
								className={`text-xs ${
									locationIsOpen() ? 'text-primary' : 'text-text-red'
								}`}
							>
								{locationIsOpen() ? 'Ouvert' : 'Fermé'}
							</p>
							<p className='text-xs'>
								De {`${openingTime?.getHours()}:${openingTime?.getMinutes()}`} à
								{` ${closingTime?.getHours()}:${closingTime?.getMinutes()}`}
							</p>
						</>
					)}
				</div>
				<h5 className='px-3 text-text-gray text-xs'>{category}</h5>
				<div></div>
				<div></div>
				<div></div>
				<h3 className='px-3 font-semibold'>Description</h3>
				<p className='px-3'>{description}</p>
				<div></div>
				<div></div>
				<div></div>
				<Link
					href={'#'}
					className='bg-text-blue rounded-xl text-white font-medium text-sm py-2 px-8 flex items-center gap-3 self-center'
				>
					Plus de details
					<i className='fa-solid fa-arrow-right'></i>
				</Link>
			</div>
		</div>
	);
};

export default LocationModal;
