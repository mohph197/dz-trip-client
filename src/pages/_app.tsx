import Layout from '@/components/shared/Layout';
import { seo } from '@/config/consts';
import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </Layout>
  );
}
