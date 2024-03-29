import Image from 'next/image'
import React from 'react'
import { useIntl } from 'react-intl'

const Partners = () => {
  const { formatMessage } = useIntl()
  const t = (id: string) => formatMessage({ id })

  return (
    <section className='pdss pt-[80px] md:py-[120px] lg:py-[160px] relative z-10 bg-white' id='Partners'>
      <div className='container textbox layout-section'>
        <div className='col-span-full text-center'>
          <h2 className='heading --h1 font-bold mb-20 uppercase'>{t('PARTNERS.TITLE')}</h2>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-y-5'>
            <PartnersItems src='/images/logo_onus.svg' />
            <PartnersItems src='/images/logo_stech.svg' />
            <PartnersItems src='/images/logo_dts.svg' />
            <PartnersItems src='/images/logo_investpush.svg' />
            <PartnersItems src='/images/logo_biccapital.svg' />
            <PartnersItems src='/images/logo_crytoleakvn.svg' />
          </div>
        </div>
      </div>
    </section>
  )
}

const PartnersItems = ({ ...props }) => {
  return (
    <Image
      src={props.src}
      alt={props.src}
      objectFit='contain'
      width={props.width ?? 250}
      height={props.height ?? 160}
    />
  )
}

export default Partners
