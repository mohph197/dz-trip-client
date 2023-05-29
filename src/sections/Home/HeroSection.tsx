import PageSection from '@/components/shared/PageSection';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

const HeroSection: FunctionComponent = () => {
	return (
		<PageSection
			name='hero'
			className='h-[max(100vh,768px)] md:h-[max(100vh,640px)]'
		>
			<div className='relative h-full w-full px-8 sm:px-14 md:px-20 flex flex-col justify-center items-center'>
				<div className='absolute inset-x-0 top-0 h-[95%] rounded-b-3xl overflow-hidden flex flex-col justify-center items-center isolate -z-10'>
					<Image
						src='/assets/images/hero.png'
						alt='Hero Background'
						fill
						className='object-cover -z-10'
					/>
					<div className='absolute top-0 inset-x-0 h-1/6 from-white bg-gradient-to-b'></div>
				</div>
				<div className='h-full w-full sm:w-4/5 md:w-3/5 lg:w-2/5 self-start flex flex-col justify-center items-stretch gap-8'>
					<div className='flex h-24 sm:h-36 justify-center sm:justify-start items-center gap-4'>
						<div className='relative h-full aspect-square'>
							<Image
								src='/assets/images/logo2.svg'
								alt='Logo'
								fill={true}
								className='object-contain'
							/>
						</div>
						<h1 className='text-5xl sm:text-6xl font-serif text-white'>
							<span className='text-primary'>D</span>
							<span className='text-secondary'>Z</span>Trip
						</h1>
					</div>
					<p className='font-medium text-white text-center sm:text-start sm:pl-10 text-lg'>
						Le site officiel du ministère du tourisme algérie pour promouvoire
						le patrimoine algèrien
					</p>
					<div className='flex flex-col sm:flex-row gap-4 sm:gap-0 justify-around items-center'>
						<Link
							href='/main'
							className='bg-secondary py-2 w-4/5 sm:w-2/5 rounded-xl text-white font-semibold text-center select-none'
						>
							Allons y !
						</Link>
						<Link
							href=''
							className='bg-white py-2 w-4/5 sm:w-2/5 rounded-xl text-black font-semibold text-center select-none'
						>
							Savoir plus
						</Link>
					</div>
				</div>
				<Link
					href='/#services'
					scroll={false}
					className='absolute bottom-[6%] animate-bounce w-12 aspect-square hover:cursor-pointer'
				>
					<Image
						src='/assets/images/hero-arrow.svg'
						alt='Down Arrow'
						fill
						className='object-contain'
					/>
				</Link>
			</div>
		</PageSection>
	);
};

export default HeroSection;
