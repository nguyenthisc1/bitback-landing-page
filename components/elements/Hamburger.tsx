import React from 'react'

const Hamburger = ({ active = false, onClick = () => {} }) => {
  return (
    <div className={`header-button__nav lg:hidden ${active ? 'active' : ''}`} onClick={onClick}>
      <div className='button-nav__social'>
        <div className='hamburger'></div>
      </div>
    </div>
  )
}

export default Hamburger
