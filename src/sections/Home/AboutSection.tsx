import ServiceTitle from "@/components/Home/ServiceTitle";
import PageSection from "@/components/shared/PageSection";
import Image from "next/image";
import { FunctionComponent } from "react";
 
const AboutSection: FunctionComponent = () => {
    return (
        <PageSection
			name='about'
			className='flex flex-col items-center gap-32'
			title='À Propos'
		>
            <div className='relative flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center w-[min(1024px,80vw)]'>
                <div className="absolute bottom-full left-[calc(-1*(100vw-min(1024px,80vw))/2)] h-28 sm:h-32 aspect-[1032/401] -z-10">
                    <Image src='/assets/images/about-1.png' alt="Plane and Path" fill className='object-cover' />
				</div>
				{/* {isMobile && (
					<ServiceTitle
						title='Qui somme nous ?'
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
				</div> */}
				<div className='flex flex-col items-start gap-10 md:w-1/2'>
					<ServiceTitle
                        title='Qui somme nous ?'
                        arrowColor='yellow'
                    />
					<p className='px-8 text-lg text-center md:text-start'>
						Trouvez sur une carte interactive les lieux touristique en algérie ,
						chercher filtrer et explorer le patrimoine algérien
					</p>
				</div>
			</div>
            <div className='relative flex flex-col md:flex-row-reverse gap-5 md:gap-0 justify-between items-center w-[min(1024px,80vw)]'>
                <div className="absolute bottom-full right-[calc(-1*(100vw-min(1024px,80vw))/2)] h-20 sm:h-24 md:h-32 aspect-[2438/540] -z-10">
					<Image src='/assets/images/about-2.png' alt="Plane and Path" fill className='object-cover' />
				</div>
                {/* {isMobile && (
					<ServiceTitle
						title='Notre mission'
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
				</div> */}
				<div className='flex flex-col items-start gap-10 md:w-1/2'>
					<ServiceTitle
                        title='Notre mission'
                        arrowColor='orange'
                    />
					<p className='px-8 text-lg text-center md:text-start'>
						Trouvez sur une carte interactive les lieux touristique en algérie ,
						chercher filtrer et explorer le patrimoine algérien
					</p>
				</div>
			</div>
            <div className='relative flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center w-[min(1024px,80vw)]'>
                <div className="absolute bottom-full left-[calc(-1*(100vw-min(1024px,80vw))/2)] h-32 sm:h-40 aspect-[1040/794] -z-10">
					<Image src='/assets/images/about-3.png' alt="Plane and Path" fill className='object-cover' />
				</div>
				{/* {isMobile && (
					<ServiceTitle
						title='Nos services'
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
				</div> */}
				<div className='flex flex-col items-start gap-10 md:w-1/2'>
					<ServiceTitle
                        title='Nos services'
                        arrowColor='orange'
                    />
					<p className='px-8 text-lg text-center md:text-start'>
						Trouvez sur une carte interactive les lieux touristique en algérie ,
						chercher filtrer et explorer le patrimoine algérien
					</p>
				</div>
			</div>
        </PageSection>
    );
}
 
export default AboutSection;