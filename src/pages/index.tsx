import AboutSection from '@/sections/Home/AboutSection';
import FAQSection from '@/sections/Home/FAQSection';
import HeroSection from '@/sections/Home/HeroSection';
import ServicesSection from '@/sections/Home/ServicesSection';
import { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<>
			<HeroSection />
			<ServicesSection />
			<AboutSection />
			<FAQSection />
		</>
	);
}

export default Home;