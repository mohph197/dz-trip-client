import { FullLocationType } from '@/services/locations.service';
import { FunctionComponent } from 'react';
import Image from 'next/image';

type PinPopupProps = {
	location: FullLocationType;
};

const PinPopup: FunctionComponent<PinPopupProps> = ({
	location: { imgSrc, name },
}) => {
	return (
		<div className='absolute flex flex-col gap-1 w-56 rounded-lg overflow-hidden border border-red-500 bg-white z-[1000]'>
			<div className="relative w-full aspect-video">
                <Image src={imgSrc} alt={name} fill className='object-cover' />
            </div>
		</div>
	);
};

export default PinPopup;
