import Image from 'next/image'
import React from 'react'
import { useIntl } from 'react-intl'
import Button from './elements/Button'

const Hero = () => {
  const { formatMessage } = useIntl()
  const t = (id: string) => formatMessage({ id })
  return (
    <section className='hero pdss overflow-hidden --grey-light-bg-cl'>
      <div className='container h-full textbox layout-section'>
        <div className='col-span-4 lg:col-span-7 self-center relative' data-aos='right'>
          <h2 className='heading --h1 font-bold mb-6 tracking-[1px]' data-aos='fade'>
            {t('HERO.TITLE')}
          </h2>
          <ul className='flex flex-col gap-4 mb-10 show-items'>
            <li className='dot-circle pl-[18px] sm:pl-[20px]'>
              <span>{t('HERO.TEXT_1')}</span>
            </li>
            <li className='dot-circle pl-[18px] sm:pl-[20px]'>
              <span>{t('HERO.TEXT_2')}</span>
            </li>
            <li className='dot-circle pl-[18px] sm:pl-[20px]'>
              <span>{t('HERO.TEXT_3')}</span>
            </li>
            <li className='dot-circle pl-[18px] sm:pl-[20px]'>
              <span>{t('HERO.TEXT_4')}</span>
            </li>
          </ul>
          <div data-aos='fade'>
            <Button href='#Footer' text={t('DOWN_APP')} />
          </div>
          <div className='scroll-more pointer-events-none mt-12 absolute hidden lg:block'>
            <Image src={'/images/scroll_more.svg'} alt='scroll_more' width={48} height={48} />
          </div>
        </div>
        <div className='col-span-4  lg:col-span-5 self-center unset-img ' data-aos='fade'>
          <div className='hero-image h-[490px] hidden lg:inline-block'></div>
          <Image className='custom-img w-full lg:hidden' src='/images/hero.png' alt='hero_image' layout='fill' />
        </div>
      </div>
    </section>
  )
}

export default Hero
