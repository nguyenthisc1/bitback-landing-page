import type { NextPage } from 'next'
import Achievements from '../components/Achievements'
import Feature1 from '../components/Feature1'
import Feature2 from '../components/Feature2'
import Feature3 from '../components/Feature3'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
const Home: NextPage = () => {

  return (
    <>
      <Header />
      <Hero />
      <Feature3 />
      <Feature1 />
      <Feature2 />
      <Achievements />
      <Partners />
      <Footer />
    </>
  )
}

export function getStaticProps({ locale }: any) {


  return {
    props: {
      messages: require(`../i18n/en.json`),
    },
  }
}

export default Home
