import Image from 'next/image'
import React from 'react'
import { useIntl } from 'react-intl'
import { Parallax } from 'react-parallax'

const ParallaxY: any = Parallax

const Feature3 = () => {
  const { formatMessage } = useIntl()
  const t = (id: string) => formatMessage({ id })

  return (
    <section className='pdss' id='Feature3'>
      <div className='container textbox layout-section '>
        <div className='col-span-8 lg:col-span-6 self-center' data-aos='right'>
          <div className='mb-6' data-aos='fade'>
            <h2 className=' heading --h1 font-bold uppercase'>{t('FEATURE_3.TITLE')}</h2>
          </div>
          <ul className='flex flex-col gap-4 mb-14 show-items'>
            <li className='dot-circle pl-[18px] sm:pl-[20px]'>
              <p>{t('FEATURE_3.TEXT_1')}</p>
            </li>
            <li className='dot-circle pl-[18px] sm:pl-[20px]'>
              <p>{t('FEATURE_3.TEXT_2')}</p>
            </li>
          </ul>
        </div>
        <div className='col-span-8 lg:col-span-6 self-center' data-aos='fade'>
          <div className='hidden md:block'>
            <ParallaxY
              className='absolute top-[20%] left-[10%] z-10 '
              strength={160}
              bgImage={'/images/feat_3_box.png'}>
              <div className='w-[180px] h-[140px] '></div>
            </ParallaxY>
            <ParallaxY className='absolute top-[40%] left-1/2 z-10' bgImage={'/images/feat_3_box_2.png'}>
              <div className='w-[180px] h-[140px] '></div>
            </ParallaxY>
            <div className='unset-img'>
              <Image className='w-full custom-img' src='/images/feat_3_ani.png' alt='feat_image' layout='fill' />
            </div>
          </div>
          <div className='unset-img md:hidden'>
            <Image className='w-full custom-img' src='/images/feat_3.png' alt='feat_image' layout='fill' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature3
