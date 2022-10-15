import React from 'react'
import NavItem from '../Nav-item'

export const MobilMenu = ({ isOpen = false
}) => {
    return (
        <>
      <div className={`absolute top-0 left-0 right-0 bg-almost-black opacity-50 z-10 min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`} />
      <div className={`absolute right-0 top-0 w-1/2 bg-white z-20 justify-center min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`}>
        <nav className="my-20 mx-5 space-x-5 text-lg w-full">
          <NavItem text='Features'/>
        </nav>
      </div>

        </>
    )
}

export default MobilMenu