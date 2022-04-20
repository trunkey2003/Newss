import '../styles/globals.css'
import { Layout } from '../components/layout/index';
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
