import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { Montserrat, Sedgwick_Ave_Display } from 'next/font/google';
import { useRouter } from 'next/router';
import LocationModalWrapper from '../Main/Locations/LocationModalWrapper';

const montserrat = Montserrat({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--montserrat-variable',
});

const sedgwick = Sedgwick_Ave_Display({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--sedgwick-variable',
});

type LayoutProps = {
	children: ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	const router = useRouter();
	const [showFooter, setShowFooter] = useState<boolean>(true);

	useEffect(() => {
		setShowFooter(!router.route.startsWith('/main'));
	}, [router.route]);

	return (
		<div className={`${sedgwick.variable} ${montserrat.variable} font-sans`}>
			<Header />
			{children}
			{showFooter && <Footer />}
			<LocationModalWrapper />
		</div>
	);
};

export default Layout;
