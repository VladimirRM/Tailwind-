import React from 'react'
import { ReactComponent as LogoIcon } from '../../images/logo.svg'
import NavItem from '../Nav-item'

const Header
  = () => {
    return (
      <header className='flex'>
        <LogoIcon />
        <nav className='flex space-x-6 ml-8 items-center'>
          <NavItem text='Features'> sad sad</NavItem>

          <NavItem text='Company' >sad sad</NavItem>
          <NavItem text='Careers' />
          <NavItem text='About' />


        </nav>

      </header>
    )
  }

export default Header
