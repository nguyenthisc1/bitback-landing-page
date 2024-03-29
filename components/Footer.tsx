import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LinkImage from './elements/LinkImage'

const Footer = () => {
  return (
    <footer className='pdbl lg:py-28 --dark-bg-cl text-white' id='Footer'>
      <div className='container flex flex-col gap-20'>
        <div className='flex flex-col items-start justify-between gap-10 sm:flex-row'>
          <Link href='/'>
            <a>
              <Image src='/images/logo_bbc_token_light.svg' alt='logo' width={180} height={60} />
            </a>
          </Link>
          <div className='flex gap-10'>
            <LinkImage
              href='https://apps.apple.com/vn/app/bitback-nh%E1%BA%ADn-th%C6%B0%E1%BB%9Fng-bitcoin/id1564273275'
              src='/images/down_appstore.png'
              width='192'
              height='57'
            />
            <LinkImage
              href='https://play.google.com/store/apps/details?id=vn.trustpay'
              src='/images/down_chplay.png'
              width='196'
              height='59'
            />
          </div>
        </div>
        <div className='flex flex-col items-start justify-between gap-10 lg:flex-row'>
          <p>Copyright © 2021 BBC Token. All rights reserved.</p>
          <div>
            <div className='flex flex-col sm:items-center gap-5 md:gap-16 sm:flex-row'>
              <span className='text-xs -mt-[5px]'>Join our Community</span>
              <div className='flex items-center gap-10 -mt-[5px]'>
                <LinkImage
                  href='https://www.facebook.com/bitbackcommunity'
                  src='/images/logo_facebook.svg'
                  width='25'
                />
                <LinkImage href='https://t.me/BitbackersVietnam' src='/images/logo_telegram.svg' width='24' />
                <LinkImage src='/images/logo_mail.svg' width='27' />
                <LinkImage
                  href='https://youtube.com/channel/UC_2-jykwGs92jGhyF5_zkbQ'
                  src='/images/logo_youtube.svg'
                  width='26'
                />
                <LinkImage href='https://twitter.com/BitbackBBC' src='/images/logo_twitter.svg' width='26' />
              </div>
            </div>
            <Link href='/policy'>
              <a className='mt-10 lg:text-right block'>Privacy Policy</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
