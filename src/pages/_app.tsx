import Layout from '@/components/shared/Layout';
import { seo } from '@/config/consts';
import { LocationModalProvider } from '@/context/LocationModalContext';
import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<LocationModalProvider>
			<Layout>
				<DefaultSeo {...seo} />
				<main
					className={`flex min-h-screen flex-col items-center justify-between`}
				>
					<Component {...pageProps} />
				</main>
			</Layout>
		</LocationModalProvider>
	);
}
