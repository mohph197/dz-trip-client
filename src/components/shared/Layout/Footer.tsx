import Image from 'next/image';
import { FunctionComponent } from 'react';
import Link from 'next/link';

const Footer: FunctionComponent = () => {
	return (
		<footer className='relative flex flex-col w-full items-center gap-14 px-4 sm:px-10 py-14 isolate bg-[#c1d9d033] mt-20 md:mt-24'>
            <Image src='/assets/images/footer.png' alt='Footer Background' fill className='absolute inset-0 -z-10 object-cover' />
			<div className='grid grid-cols-1 justify-items-center text-center sm:text-start sm:justify-items-stretch sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-5 self-stretch'>
				<div className='flex flex-col gap-8'>
					<div className='flex h-16 justify-center sm:justify-start items-center gap-2'>
						<div className='relative h-full aspect-square'>
							<Image
								src='/assets/images/logo.svg'
								alt='Logo'
								fill={true}
								className='object-contain'
							/>
						</div>
						<span className='text-4xl font-serif'>DZTrip</span>
					</div>
					<p className='text-text-gray'>
						Le site officiel du ministère du tourisme algérie pour promouvoire
						le patrimoine algèrien
					</p>
				</div>
				<div className='flex flex-col gap-5'>
					<h4 className='font-bold text-text-blackGray'>Ministère</h4>
					<ul className='flex flex-col gap-2'>
						<li className='text-text-blackGray'>
							<Link href=''>A propos</Link>
						</li>
						<li className='text-text-blackGray'>
							<Link href=''>Termes d&apos;utilisation</Link>
						</li>
						<li className='text-text-blackGray'>
							<Link href=''>Contactez nous</Link>
						</li>
						<li className='text-text-blackGray'>
							<Link href=''>Blogs</Link>
						</li>
					</ul>
				</div>
				<div className='flex flex-col gap-5'>
					<h4 className='font-bold text-text-blackGray'>Centre d&apos;aide</h4>
					<ul className='flex flex-col gap-2'>
						<li className='text-text-blackGray'>
							<Link href=''>Tourist visa</Link>
						</li>
						<li className='text-text-blackGray'>
							<Link href=''>How to come?</Link>
						</li>
						<li className='text-text-blackGray'>
							<Link href=''>Why us?</Link>
						</li>
						<li className='text-text-blackGray'>
							<Link href=''>FAQs</Link>
						</li>
					</ul>
				</div>
				<div className='flex flex-col gap-5'>
					<h4 className='font-bold text-text-blackGray'>
						Informations de contact
					</h4>
					<ul className='flex flex-col gap-5'>
						<div className='flex flex-col gap-1'>
							<li className='text-text-blackGray flex justify-center sm:justify-start items-center gap-3 sm:pl-3'>
								<i className='fa-solid fa-phone'></i>
								<span>+213 23 23 23 23</span>
							</li>
							<li className='text-text-blackGray flex justify-center sm:justify-start items-center gap-3 sm:pl-3'>
								<i className='fa-solid fa-at'></i>
								<span>contact@bytewise.dz</span>
							</li>
							<li className='text-text-blackGray flex justify-center sm:justify-start items-center gap-3 sm:pl-3'>
								<i className='fa-solid fa-location-dot'></i>
								<span>119 rue Didouche Mourad, Algiers</span>
							</li>
						</div>
						<li className='text-text-blackGray flex gap-5 items-center justify-center sm:justify-start'>
							<Link href=''>
								<i className='fa-brands fa-square-facebook fa-xl'></i>
							</Link>
							<Link href=''>
								<i className='fa-brands fa-twitter fa-xl'></i>
							</Link>
							<Link href=''>
								<i className='fa-brands fa-instagram fa-xl'></i>
							</Link>
							<Link href=''>
								<i className='fa-brands fa-linkedin fa-xl'></i>
							</Link>
						</li>
					</ul>
				</div>
			</div>
            <div className="flex flex-col gap-4 items-center w-[min(28rem,100%)]">
                <h6 className='font-bold text-text-red'>Rejoindre DZ Trip</h6>
                <h4 className='font-semibold text-text-blackBlue text-4xl'>Se connecter</h4>
                <form className="relative self-stretch" method='post'>
                    <input type="email" name="contact-email" id="contact-email" placeholder='Votre adresse email' className='px-4 py-3 rounded-2xl bg-white border border-[#E6E6E6] outline-none w-full text-sm placeholder:font-normal' />
                    <button className='absolute right-0 inset-y-0 px-3 rounded-2xl text-xs sm:text-sm font-semibold bg-primary text-white'>Se connecter</button>
                </form>
            </div>
            <div className="flex flex-col items-center gap-5 w-[min(350px,80vw)]">
                <hr className='border-text-gray border self-stretch' />
                <small className='text-base font-semibold text-text-blackGray text-center w-[90%]'>© 2023 ByteWise | All rights raserved</small>
            </div>
		</footer>
	);
};

export default Footer;
