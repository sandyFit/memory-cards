import React from 'react'

const Card = ({card}) => {
  return (
      <div className="card">
          <span className='emoji'>
              {card.emoFront}
          </span>
    </div>
  )
}

export default Card;
