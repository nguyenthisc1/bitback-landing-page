import Image from 'next/image'
import React from 'react'
import Button from './elements/Button'
import { Parallax } from 'react-parallax'
import { useIntl } from 'react-intl'

const ParallaxY: any = Parallax

const Feature2 = () => {
  const { formatMessage } = useIntl()
  const t = (id: string) => formatMessage({ id })

  return (
    <section className='pdss --grey-light-bg-cl' id='Feature2'>
      <div className='container textbox layout-section'>
        <div
          className='col-span-8 order-2 lg:order-1 lg:col-span-6 self-center relative'
          data-aos='show-token'
          data-aos-delay='250'>
          <div className='hidden md:block '>
            <ParallaxY
              className='bottom-[10%] right-[15%] parallax-token'
              strength={50}
              bgImage={'/images/nft_1.png'}
            />
            <ParallaxY className='bottom-0 left-[10%] parallax-token' strength={-60} bgImage={'/images/nft_2.png'} />
            <ParallaxY className='top-[40%] left-0 parallax-token' strength={50} bgImage={'/images/nft_3.png'} />
            <ParallaxY className='top-[20%] left-[10%] parallax-token' strength={100} bgImage={'/images/nft_4.png'} />
            <ParallaxY className='top-1/2 right-0 parallax-token' strength={30} bgImage={'/images/nft_5.png'} />
            <ParallaxY className='top-[10%] right-16 parallax-token' strength={-20} bgImage={'/images/nft_6.png'} />
            <div className='unset-img' data-aos='fade'>
              <Image className='w-full custom-img ' src='/images/feat_2.png' alt='feat_image' layout='fill' />
            </div>
          </div>
          <div className='unset-img md:hidden'>
            <Image className='w-full custom-img ' src='/images/feat_2.png' alt='feat_image' layout='fill' />
          </div>
        </div>
        <div
          className='col-span-8  lg:order-2 lg:col-span-6  lg:max-w-[500px] lg:justify-self-end self-center'
          data-aos='fade'>
          <div className='mb-10'>
            <h2 className=' heading --h1 font-bold mb-6 uppercase'>{t('FEATURE_2.TITLE')}</h2>
            <ul className='flex flex-col gap-4 mb-14 show-items'>
              <li className='dot-circle pl-[18px] sm:pl-[20px]'>
                <p>{t('FEATURE_2.TEXT_1')}</p>
              </li>
              <li className='dot-circle pl-[18px] sm:pl-[20px]'>
                <p>{t('FEATURE_2.TEXT_2')}</p>
              </li>
              <li className='dot-circle pl-[18px] sm:pl-[20px]'>
                <p>{t('FEATURE_2.TEXT_3')}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature2
