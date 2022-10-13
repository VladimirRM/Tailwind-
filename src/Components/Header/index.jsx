import React from 'react'
import { ReactComponent as LogoIcon } from '../../images/logo.svg'
import NavItem from '../Nav-item'
import NavMenu from '../Nav-menu'
import {FEATURES, COMPANY} from './constants';

const Header
  = () => {
    return (
      <header className='flex'>
        <LogoIcon />
        <nav className='flex space-x-6 ml-8 items-center'>
          <NavItem text='Features'>
            <NavMenu items={FEATURES}/>
          </NavItem>

          <NavItem text='Company' >
          <NavMenu items={COMPANY}/>

          </NavItem>
          <NavItem text='Careers' />
          <NavItem text='About' />


        </nav>

      </header>
    )
  }

export default Header
