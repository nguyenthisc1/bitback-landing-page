import Aos from 'aos'
import 'aos/dist/aos.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { IntlProvider } from 'react-intl'
import '../styles/index.scss'
function MyApp({ Component, pageProps }: AppProps | any) {
  const { defaultLocale, locale } = useRouter()
  useEffect(() => {
    Aos.init({ easing: 'ease', duration: 800, offset: 350, once: true })
  }, [])



  return (
    <IntlProvider
      messages={pageProps.messages || 'vi'}
      locale={pageProps.locale || locale}
      defaultLocale={pageProps.defaultLocale || defaultLocale}>
      <Head>
        <title>{'Bitback Landing Page'}</title>
        <meta name='description' content='Bitback Landing Page' />
        <link rel='icon' href='./favicon.png' />
      </Head>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp
