import React from 'react'

const Card = ({className,children}) => {
  return (
    <article className={`Card ${className}`}>
    
    {children}
    </article>
  )
}

export default Card;