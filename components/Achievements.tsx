import Image from 'next/image'
import React, { useState } from 'react'
import CountUp from 'react-countup'
import { useIntl } from 'react-intl'
import ScrollTrigger from 'react-scroll-trigger'

const ScrollTriggerX: any = ScrollTrigger

const Achievements = () => {
  const { formatMessage } = useIntl()
  const t = (id: string) => formatMessage({ id })
  const [count, setCount] = useState(false)
  return (
    <ScrollTriggerX onEnter={() => setCount(true)}>
      <section className='pdss --gray-dark-bg-cl text-white py-[90px]' id='Achievements'>
        <div className='container textbox layout-section'>
          <div className='col-span-4 lg:col-span-7'>
            <div className='mb-6'>
              <h2 className=' heading --h1 font-bold mb-20 uppercase'>{t('ACHIEVEMENTS.TITLE')}</h2>
              <div className='grid grid-cols-2 lg:grid-cols-3 gap-28'>
                <div>
                  <h3 className='heading --h2 font-bold'>
                    {count ? <CountUp duration={3} end={260.0} decimal='.' decimals={3} suffix='+' /> : '0'}
                  </h3>
                  <p className='lg:whitespace-nowrap'>{t('ACHIEVEMENTS.TEXT_1')}</p>
                </div>
                <div>
                  <h3 className='heading --h2 font-bold'>
                    {count ? <CountUp duration={3} end={21} decimal='.' decimals={3} prefix='~' suffix='+' /> : '0'}
                  </h3>

                  <p>{t('ACHIEVEMENTS.TEXT_2')}</p>
                </div>
                <div>
                  <h3 className='heading --h2 font-bold'>
                    {count ? <CountUp duration={3} end={10} decimal='.' decimals={3} prefix='~' /> : '0'}
                  </h3>
                  <p>{t('ACHIEVEMENTS.TEXT_3')}</p>
                </div>
                <div>
                  <h3 className='heading --h2 font-bold'>
                    {count && <CountUp duration={3} end={250} decimal='.' decimals={3} />}
                  </h3>
                  <p>{t('ACHIEVEMENTS.TEXT_4')}</p>
                </div>
                <div>
                  <h3 className='heading --h2 font-bold'>{count && <CountUp duration={3} end={42} suffix='%' />}</h3>
                  <p>{t('ACHIEVEMENTS.TEXT_5')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-4 lg:col-span-5 justify-self-center self-end'>
            <Image src='/images/cup.png' alt='cup' width={180} height={275} />
          </div>
        </div>
      </section>
    </ScrollTriggerX>
  )
}

export default Achievements
