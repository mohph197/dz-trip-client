import AboutSection from '@/sections/Home/AboutSection';
import FAQSection from '@/sections/Home/FAQSection';
import HeroSection from '@/sections/Home/HeroSection';
import ServicesSection from '@/sections/Home/ServicesSection';
import { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<div className='w-full pb-20 md:pb-24'>
			<HeroSection />
			<ServicesSection />
			<AboutSection />
			<FAQSection />
		</div>
	);
}

export default Home;