import React from 'react'
import { ReactComponent as LogoIcon } from '../../images/logo.svg'
import NavItem from '../Nav-item'

const Header
  = () => {
    return (
      <header className='flex'>
        <LogoIcon />
        <nav>
          <NavItem/>
        </nav>

      </header>
    )
  }

export default Header
