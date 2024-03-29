import Link from 'next/link'
import React from 'react'
import { useIntl } from 'react-intl'

const Nav = ({ openNav = false }) => {
  const { formatMessage } = useIntl()
  const t = (id: string) => formatMessage({ id })

  return (
    <>
      <nav className={`nav lg:hidden ${openNav ? 'active' : ''}`}>
        <ul className='nav-menu font-medium flex flex-col gap-5 text-2xl pt-8 px-[15px]'>
          <li className='nav-li'>
            <Link href='/'>
              <a>
                <span className='nav-link__text'>{t('HEADER.PLATFORM')}</span>
              </a>
            </Link>
          </li>
          <li className='nav-li'>
            <Link href='/'>
              <a>
                <span className='nav-link__text'>{t('HEADER.WALLET')}</span>
              </a>
            </Link>
          </li>
          <li className='nav-li'>
            <Link href='/'>
              <a>
                <span className='nav-link__text'>{t('HEADER.MISSION')}</span>
              </a>
            </Link>
          </li>

          <li className='nav-li'>
            <Link href='/'>
              <a>
                <span className='nav-link__text'>{t('HEADER.ACHIEVEMENTS')}</span>
              </a>
            </Link>
          </li>
          <li className='nav-li'>
            <Link href='/'>
              <a>
                <span className='nav-link__text'>{t('HEADER.PARTNERS')}</span>
              </a>
            </Link>
          </li>
          <li className='nav-li'>
            <Link href='/'>
              <a>
                <span className='nav-link__text'>{t('HEADER.CONTACT')}</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
