import React, { useState } from 'react';
import { emojis } from '../emojis';
import Card from './Card';

const Cards = () => {
    const [cards, setCards] = useState([...emojis].sort(() => Math.random() - 0.5));

    return (
        <div className='cards-container'>
            {cards.map((card) => (
                <Card key={card.id}
                      card={card}
                />
            ))}
        </div>
    );
}

export default Cards;
