import Link from 'next/link'
import React from 'react'

const Button = ({ ...props }) => {
  return (
    <div className={`main-button text-white font-semibold text --t16 ${props.className}`}>
      <Link href={`${props.href ?? '/'}`}>
        <a target={props.target}>
          <div className='flex flex-col relative z-10'>
            <span className='link-text'>{props.text ?? 'TEXT'}</span>
            <span className='link-text link-text__hover'>{props.text ?? 'TEXT'}</span>
          </div>
          <div className='absolute inset-0 background-hover'></div>
        </a>
      </Link>
    </div>
  )
}

export default Button
