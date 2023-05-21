import { Montserrat } from 'next/font/google';
import { NextSeo } from 'next-seo';

import { seo } from '@/config/consts';
import Header from '@/components/Home/Header';

const inter = Montserrat({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

export default function Home() {
	return (
		<>
			<NextSeo {...seo} />
			<main
				className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
			>
				<Header title={seo.title} />
			</main>
		</>
	);
}
