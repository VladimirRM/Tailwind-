import React from 'react'

export const MobilMenu = ({ isOpen = false
}) => {
    return (
        <React.Fragment>
      <div className={`absolute top-0 left-0 right-0 bg-almost-black opacity-50 z-10 min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`} />

        </React.Fragment>
    )
}

export default MobilMenu