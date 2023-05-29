import ServiceTitle from '@/components/Home/ServiceTitle';
import PageSection from '@/components/shared/PageSection';
import { useWindowSize } from '@/hooks/WindowSize';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, useEffect, useState } from 'react';

const ServicesSection: FunctionComponent = () => {
	const windowSize = useWindowSize();
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		if (windowSize.width) setIsMobile(windowSize.width < 768);
	}, [windowSize.width]);

	return (
		<PageSection
			name='services'
			className='flex flex-col items-center gap-24 isolate'
			title='Vous Trouvez'
		>
			<div className='relative flex flex-col md:flex-row-reverse gap-5 md:gap-0 justify-between items-center w-[min(1024px,80vw)]'>
				<div className="absolute bottom-full left-[calc(-1*(100vw-min(1024px,80vw))/2)] h-24 sm:h-32 md:h-40 aspect-[395/257] -z-10">
					<Image src='/assets/images/services-1.png' alt="Plane and Path" fill className='object-contain' />
				</div>
				{isMobile && (
					<ServiceTitle
						title='Lieux touristiques en algérie'
						arrowColor='green'
					/>
				)}
				<div className='relative w-3/4 md:w-2/6 aspect-square'>
					<Image
						src='/assets/images/service-1.png'
						alt='Places in Map'
						fill
						className='object-contain'
					/>
				</div>
				<div className='flex flex-col items-start gap-10 md:w-1/2'>
					{!isMobile && (
						<ServiceTitle
							title='Lieux touristiques en algérie'
							arrowColor='green'
						/>
					)}
					<p className='px-8 text-lg text-center md:text-start'>
						Trouvez sur une carte interactive les lieux touristique en algérie ,
						chercher filtrer et explorer le patrimoine algérien
					</p>
				</div>
			</div>
			<div className='relative flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center w-[min(1024px,80vw)]'>
				<div className="absolute bottom-full right-[calc(-1*(100vw-min(1024px,80vw))/2)] h-20 sm:h-24 md:h-32 aspect-[2438/540] -z-10">
					<Image src='/assets/images/services-2.png' alt="Plane and Path" fill className='object-cover' />
				</div>
				{isMobile && (
					<ServiceTitle
						title='Visitez en 360° de chez vous'
						arrowColor='blue'
					/>
				)}
				<div className='relative w-3/4 md:w-2/6 aspect-square'>
					<Image
						src='/assets/images/service-2.png'
						alt='Places in Map'
						fill
						className='object-contain'
					/>
				</div>
				<div className='flex flex-col items-start gap-10 md:w-1/2'>
					{!isMobile && (
						<ServiceTitle
							title='Visitez en 360° de chez vous'
							arrowColor='blue'
						/>
					)}
					<p className='px-8 text-lg text-center md:text-start'>
						Trouvez sur une carte interactive les lieux touristique en algérie ,
						chercher filtrer et explorer le patrimoine algérien
					</p>
				</div>
			</div>
			<div className='relative flex flex-col md:flex-row-reverse gap-5 md:gap-0 justify-between items-center w-[min(1024px,80vw)]'>
				<div className="absolute bottom-full right-[calc(-1*(100vw-min(1024px,80vw))/2)] h-20 sm:h-24 md:h-32 aspect-[1270/431] -z-10">
					<Image src='/assets/images/services-3.png' alt="Plane and Path" fill className='object-contain' />
				</div>
				{isMobile && (
					<ServiceTitle
						title="Avoir l'application mobile"
						arrowColor='purple'
					/>
				)}
				<div className='flex flex-col items-center w-3/4 md:w-1/4 gap-4'>
					<div className='relative w-full aspect-square'>
						<Image
							src='/assets/images/mobile-app.png'
							alt='Places in Map'
							fill
							className='object-contain'
						/>
					</div>
					<Link
						href=''
						className='text-lg md:text-base lg:text-lg py-2 px-10 bg-accent text-white rounded-xl'
					>
						télécharger
					</Link>
				</div>
				<div className='flex flex-col items-start gap-10 md:w-1/2'>
					{!isMobile && (
						<ServiceTitle
							title="Avoir l'application mobile"
							arrowColor='purple'
						/>
					)}
					<p className='px-8 text-base md:text-lg text-center md:text-start'>
						C&apos;est plus efficace avec vos smartphone ! télécharger DZ Trip
						mooile est decouvrez l&apos;algérie
					</p>
				</div>
			</div>
		</PageSection>
	);
};

export default ServicesSection;
