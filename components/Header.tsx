import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Button from './elements/Button'
import Hamburger from './elements/Hamburger'
import MenuItem from './elements/MenuItem'
import Nav from './elements/Nav'
// import Router, { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

const Header = ({ ...props }) => {
  const { formatMessage } = useIntl()
  const t = (id: string) => formatMessage({ id })
  // const { locale } = useRouter()
  const [openNav, setOpenNav] = useState(false)
  const [activeScroll, setActiveScroll] = useState(false)

  // const changeLocale = useCallback(() => {
  //   locale === 'vi' ? Router.push('/', '/', { locale: 'en' }) : Router.push('/', '/', { locale: 'vi' })
  // }, [locale])

  useEffect(() => {
    const handleScroll = () => {
      setActiveScroll(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header className={`header ${activeScroll ? 'active' : ''}`}>
      <div className='container textbox flex justify-between items-center h-full'>
        <div className='flex lg:gap-8'>
          <Link href='/'>
            <a>
              <Image src='/images/logo_bbc_token_dark.svg' alt='logo' width='165px' height='45px' />
            </a>
          </Link>
          <ul
            className={` mt-[5px] items-center md:gap-8 xl:gap-12 font-medium text --t16 hidden lg:flex ${props.menuClassName}`}>
            <li>
              <MenuItem to='Feature3' text={t('HEADER.PLATFORM')} />
            </li>
            <li>
              <MenuItem to='Feature1' text={t('HEADER.WALLET')} />
            </li>
            <li>
              <MenuItem offset={-100} to='Feature2' text={t('HEADER.MISSION')} />
            </li>
            <li>
              <MenuItem offset={-100} to='Achievements' text={t('HEADER.ACHIEVEMENTS')} />
            </li>
            <li>
              <MenuItem offset={-40} to='Partners' text={t('HEADER.PARTNERS')} />
            </li>
            <li>
              <MenuItem offset={-90} to='Footer' text={t('HEADER.CONTACT')} />
            </li>
          </ul>
        </div>
        <div className='flex gap-2 items-center md:gap-5'>
    
          <div className={`${props.buttonClassName} flex gap-2 md:gap-5`}>
            <Button
              href='https://drive.google.com/file/d/1AfMFh0X553WwKSCFHOP5LQnLbaFHUXx1/view?usp=sharing'
              target='_blank'
              className='--reverse min-w-[100px] md:min-w-[155px]'
              text='Whitepaper'
            />
            <Hamburger onClick={() => setOpenNav(!openNav)} active={openNav} />
          </div>
        </div>
      </div>
      <Nav openNav={openNav} />
    </header>
  )
}

export default Header
