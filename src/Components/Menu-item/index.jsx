import React from 'react'

const MenuItem = ({text='',icon}) => {
  return (
    <div>
        {icon}
        <span>
            {text}
        </span>
    </div>
  )
}

export default MenuItem