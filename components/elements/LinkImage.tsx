import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LinkImage = ({ ...props }) => {
  return (
    <Link className='custom-img' href={props.href ?? '/'}>
      <a target='_blank'>
        <Image src={props.src ?? ''} alt={props.src} width={props.width} height={props.height ?? props.width} />
      </a>
    </Link>
  )
}

export default LinkImage
