import React from 'react'
import { ReactComponent as LogoIcon } from '../../images/logo.svg'
import { ReactComponent as MenuIcon } from '../../images/icon-menu.svg'
import { ReactComponent as MenuCloseIcon } from '../../images/icon-close-menu.svg'
import Button from '../Button';
import NavItem from '../Nav-item'
import NavMenu from '../Nav-menu'
import { FEATURES, COMPANY } from './constants';

const Header
  = () => {
    const [isMobilMenuOpen, SetIsMobilMenuOpen] = useState(false)
    return (
      <header className='flex items-center'>
        <LogoIcon />
        <nav className="hidden xl:flex space-x-6 ml-8 items-center">

          <NavItem text='Features'>
            <NavMenu items={FEATURES} />
          </NavItem>

          <NavItem text='Company' >
            <NavMenu items={COMPANY} />

          </NavItem>
          <NavItem text='Careers' />
          <NavItem text='About' />


        </nav>
        <div className="hidden ml-auto xl:flex space-x-5">
          <Button>Login</Button>
          <Button hasBorder={true}>Register</Button>
        </div>
        <div className="flex xl:hidden ml-auto cursor-pointer z-30">
          <MenuIcon />
        </div>
      </header>
    )
  }

export default Header
