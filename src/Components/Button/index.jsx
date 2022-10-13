import React from 'react'


const borderStyles = 'border-2 border-almost-black rounded-lg '
const filledStyles = 'text-almost-white bg-black rounded-lg font-bold px-6 py-4 mx-0 hover:bg-transparent hover:text-almost-black border-2 border-almost-black'
const Button = ({

    children = "",
    hasBorder = false,
    isFilled = false,
}) => {
  return (
    <button className={`text-medium-grey px-5 py-2 ${hasBorder && borderStyles} ${isFilled && filledStyles}`}>{children}</button>
  )
}

export default Button