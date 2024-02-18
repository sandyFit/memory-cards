
import React, { useState, useEffect } from 'react';
import { emojis } from './emojis';
import FlipCard from './FlipCard';

const App = () => {
    const [cards, setCards] = useState(emojis.map(emoji => ({ ...emoji, isFlipped: false})));
    const [canClick, setCanClick] = useState(false);

    // Flip cards to back after a delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setCards(cards.map(card => ({ ...card, isFlipped: true })));
            setCanClick(true);
        }, 5000); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, []);

    const handleClick = id => {
        if (!canClick) return;
        setCards(cards.map(card => card.id === id ? { ...card, isFlipped: !card.isFlipped } : card));
    };

    return (
        <main>
            <h1>Memory Cards</h1>
            <div className="container">
                {cards.map(card => (
                    <FlipCard
                        key={card.id}
                        id={card.id}
                        isFlipped={card.isFlipped}
                        frontContent={<span>{card.emoFront}</span>}
                        backContent={<span>{card.back}</span>}
                        onClick={handleClick}
                    />
                ))}
            </div>
        </main>
    );
};

export default App;
