import Image from 'next/image';
import { FunctionComponent } from 'react';
import { Sedgwick_Ave_Display } from 'next/font/google';
import Link from 'next/link';

const inter = Sedgwick_Ave_Display({
	weight: ['400'],
	subsets: ['latin'],
});

const Footer: FunctionComponent = () => {
	return (
		<footer className='relative flex flex-col w-full items-center gap-14 p-14 isolate bg-[#c1d9d033]'>
            <Image src='/assets/images/footer.png' alt='Footer Background' fill className='absolute inset-0 -z-10 object-cover' />
			<div className='grid grid-cols-[30%_repeat(2,auto)_25%] gap-2 self-stretch'>
				<div className='flex flex-col gap-8'>
					<div className='flex h-16 items-center gap-2'>
						<div className='relative h-full aspect-square'>
							<Image
								src='/assets/images/logo.svg'
								alt='Logo'
								fill={true}
								className='object-contain'
							/>
						</div>
						<span className={`text-4xl ${inter.className}`}>DZTrip</span>
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
					<h4 className='font-bold text-text-blackGray'>Centre d&lsquo;aide</h4>
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
							<li className='text-text-blackGray flex items-center'>
								<i className='fa-solid fa-phone px-3'></i>
								<span>+213 23 23 23 23</span>
							</li>
							<li className='text-text-blackGray flex items-center'>
								<i className='fa-solid fa-at px-3'></i>
								<span>contact@bytewise.dz</span>
							</li>
							<li className='text-text-blackGray flex items-center'>
								<i className='fa-solid fa-location-dot px-3'></i>
								<span>119 rue Didouche Mourad, Algiers</span>
							</li>
						</div>
						<li className='text-text-blackGray flex gap-5 items-center'>
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
            <div className="flex flex-col gap-4 items-center w-1/3">
                <h6 className='font-bold text-text-red'>Rejoindre DZ Trip</h6>
                <h4 className='font-semibold text-text-blackBlue text-4xl'>Se connecter</h4>
                <form className="relative self-stretch" method='post'>
                    <input type="email" name="contact-email" id="contact-email" placeholder='Votre adresse email' className='px-4 py-3 rounded-2xl bg-white border border-[#E6E6E6] outline-none w-full text-sm placeholder:font-normal' />
                    <button className='absolute right-0 inset-y-0 px-3 rounded-2xl text-sm font-semibold bg-primary text-white'>Se connecter</button>
                </form>
            </div>
            <div className="flex flex-col items-center gap-5 w-1/4">
                <hr className='border-text-gray border self-stretch' />
                <small className='text-base font-semibold text-text-blackGray'>© 2023 ByteWise | All rights raserved</small>
            </div>
		</footer>
	);
};

export default Footer;
