import React from 'react'
import { Link as LinkToSection } from 'react-scroll'

const MenuItem = ({ ...props }) => {
  return (
    <LinkToSection
      activeClass={props.activeClass ?? 'activesScrollSection'}
      to={props.to}
      spy={props.spy ?? true}
      smooth={props.smooth ?? false}
      offset={props.offset ?? -100}
      duration={props.duration ?? 500}>
      <div className='menu-item'>
        <span className='link-text'>{props.text ?? 'TEXT'}</span>
        <span className='link-text link-text__hover'>{props.text ?? 'TEXT'}</span>
      </div>
    </LinkToSection>
  )
}

export default MenuItem
