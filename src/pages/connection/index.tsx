import PageSection from '@/components/shared/PageSection';
import { NextPage } from 'next';
import Image from 'next/image';
import BackgroundImage from '@/assets/images/connection.png';

const Connection: NextPage = () => {
	return (
		<PageSection name='connection' className='h-[max(100vh,24rem)]'>
			<div className='relative h-full w-full flex flex-col justify-center items-center isolate'>
				<Image
					src={BackgroundImage}
					alt='Connection Background'
					placeholder='blur'
					fill
					className='absolute inset-0 -z-10'
				/>
				<div className='absolute top-0 inset-x-0 h-1/6 from-white bg-gradient-to-b'></div>
				<article className='flex flex-col gap-8 rounded-2xl p-8 from-[#a5a5a57a] to-[#ffffff7a] bg-gradient-to-b backdrop-blur'>
					<div className='flex flex-col items-center'>
						<div className='relative w-16 aspect-square self-start'>
							<Image
								src='/assets/images/opening-quotes.svg'
								alt='Opening Quote'
								fill
								className='object-contain'
							/>
						</div>
						<h3 className='text-xl w-72 text-center font-medium text-text-blackGray'>
							The world is a book and those who do not travel read only one page
						</h3>
						<div className='relative w-16 aspect-square self-end'>
							<Image
								src='/assets/images/closing-quotes.svg'
								alt='Closing Quote'
								fill
								className='object-contain'
							/>
						</div>
					</div>
					<button className='px-6 py-3 rounded-xl bg-white bg-opacity-50'>
						Google
					</button>
				</article>
			</div>
		</PageSection>
	);
};

export default Connection;
