import PageSection from '@/components/shared/PageSection';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<PageSection
				name='hero'
				className='h-[max(100vh,768px)] md:h-[max(100vh,640px)]'
			>
				<div className='relative h-full w-full px-14 md:px-20'>
					<div className='absolute inset-x-0 top-0 h-[95%] rounded-b-3xl overflow-hidden flex flex-col justify-center items-center isolate -z-10'>
						<Image
							src='/assets/images/hero.png'
							alt='Hero Background'
							fill
							className='object-cover -z-10'
						/>
						<div className='absolute top-0 inset-x-0 h-1/6 from-white bg-gradient-to-b'></div>
						<button className='absolute bottom-[4%] animate-bounce w-12 aspect-square'>
							<Image
								src='/assets/images/hero-arrow.svg'
								alt='Down Arrow'
								fill
								className='object-contain'
							/>
						</button>
					</div>
					<div className='h-full w-full md:w-2/5 flex flex-col justify-center items-stretch gap-8'>
						<div className='flex h-36 items-center gap-4'>
							<div className='relative h-full aspect-square'>
								<Image
									src='/assets/images/logo2.svg'
									alt='Logo'
									fill={true}
									className='object-contain'
								/>
							</div>
							<h1 className='text-6xl font-serif text-white'>
								<span className='text-primary'>D</span>
								<span className='text-secondary'>Z</span>Trip
							</h1>
						</div>
						<p className='font-medium text-white pl-10 text-lg'>
							Le site officiel du ministère du tourisme algérie pour promouvoire
							le patrimoine algèrien
						</p>
						<div className='flex justify-around items-center'>
							<Link
								href=''
								className='bg-primary py-2 w-2/5 rounded-xl text-white font-semibold text-center select-none'
							>
								Allons y !
							</Link>
							<Link
								href=''
								className='bg-white py-2 w-2/5 rounded-xl text-black font-semibold text-center select-none'
							>
								Savoir plus
							</Link>
						</div>
					</div>
				</div>
			</PageSection>
		</>
	);
}
