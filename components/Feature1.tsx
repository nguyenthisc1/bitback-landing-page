import Image from 'next/image'
import React from 'react'
import { useIntl } from 'react-intl'
import { Parallax } from 'react-parallax'
const ParallaxY: any = Parallax

const Feature1 = () => {
  const { formatMessage } = useIntl()
  const t = (id: string) => formatMessage({ id })

  return (
    <section className='pdss' id='Feature1'>
      <div className='container textbox layout-section'>
        <div className='col-span-4 lg:col-span-6 self-center' data-aos='right'>
          <div className='mb-6' data-aos='fade'>
            <h2 className=' heading --h1 font-bold uppercase mb-4'>{t('FEATURE_1.TITLE')}</h2>
            <p>{t('FEATURE_1.SUBTITLE')}</p>
          </div>
          <ul className='flex flex-col gap-4 mb-14 show-items'>
            <li className='dot-circle pl-[18px] sm:pl-[20px]'>
              <p>{t('FEATURE_1.TEXT_1')}</p>
            </li>
            <li className='dot-circle pl-[18px] sm:pl-[20px]'>
              <p>{t('FEATURE_1.TEXT_2')}</p>
            </li>
            <li className='dot-circle pl-[18px] sm:pl-[20px]'>
              <p>{t('FEATURE_1.TEXT_3')}</p>
            </li>
          </ul>
        </div>
        <div className='relative col-span-4 lg:col-span-6 self-center ' data-aos='show-token' data-aos-delay='250'>
          <div className='hidden md:block --small '>
            <ParallaxY className='top-0 left-[30%] parallax-token' strength={30} bgImage={'/images/token_1.png'} />
            <ParallaxY className='top-1/4 left-[10%] parallax-token' strength={30} bgImage={'/images/token_2.png'} />
            <ParallaxY className='top-[40%] right-0 parallax-token' strength={60} bgImage={'/images/token_3.png'} />
            <ParallaxY
              className='bottom-[10%] left-[10%] parallax-token'
              strength={80}
              bgImage={'/images/token_4.png'}
            />
            <ParallaxY className='bottom-[10%] right-9 parallax-token' strength={-50} bgImage={'/images/token_5.png'} />
            <ParallaxY className='top-[10%] right-16 parallax-token' strength={-40} bgImage={'/images/token_6.png'} />
            <div className='unset-img' data-aos='fade'>
              <Image className='w-full custom-img ' src='/images/feat_1_ani.png' alt='feat_image' layout='fill' />
            </div>
          </div>
          <div className='unset-img md:hidden'>
            <Image className='w-full custom-img ' src='/images/feat_1.png' alt='feat_image' layout='fill' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature1
