import { FunctionComponent, ReactNode } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { Montserrat, Sedgwick_Ave_Display } from 'next/font/google';

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
	return (
		<div className={`${sedgwick.variable} ${montserrat.variable} font-sans`}>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
