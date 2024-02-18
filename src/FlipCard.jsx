import React from 'react';

const FlipCard = ({id, isFlipped, frontContent, backContent, onClick,}) => {


    return (
        <div className={`card ${isFlipped ? 'is-flipped' : ''}`}
            onClick={() => onClick(id)}
        >
            <div className="cardInner">
                <div className="front">
                    {frontContent}
                </div>
                <div className="back">
                    {backContent}
                </div>
            </div>
        </div>
    );
}

export default FlipCard;

