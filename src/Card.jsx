import React from 'react'

const Card = ({frontContent, backContent}) => {
    return (
        <article>
            <div className="front">
                {frontContent}
            </div>
            <div className="back">
                {backContent}
            </div>
        </article>
    )
}

export default Card