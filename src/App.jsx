
import React, { useState, useEffect } from 'react';
import { emojis } from './emojis';
import FlipCard from './FlipCard';
import SwitchButton from './SwitchButton';

const App = () => {

    /* The initial state is set by mapping over the emojis array to create a new array of card objects. 
    Each card object is constructed by spreading the properties of an emoji object (...emoji) and adding an 
    additional property: isFlipped: false. */
    const [cards, setCards] = useState(emojis.map(emoji => ({ ...emoji, isFlipped: false})));
    // Control when the cards are allowed to be clicked and flipped by the user. 
    const [canClick, setCanClick] = useState(false);


    /* update the state of the cards to get a new array where the clicked card is flipped, and this new array is 
        then set as the new state of cards using setCards */
    const handleClick = id => {
        if (!canClick) return;

        /* If the id matches, it creates a new object for the card with the same properties as before (...card), 
        but with the isFlipped property toggled (!card.isFlipped). If isFlipped was false, it becomes true, and 
        vice versa. This effectively flips the card. 
        If the id does not match, the original card object is returned unchanged (: card). */
        setCards(cards.map(card => card.id === id ? { ...card, isFlipped: !card.isFlipped } : card));
    };

    const shuffleAndFlipCards = () => {
        // Shuffle the cards
        let shuffledCards = [...cards].sort(() => 0.5 - Math.random());
        
        // Set the shuffled cards to be initially unflipped (showing emojis)
        setCards(shuffledCards.map(card => ({ ...card, isFlipped: false })));
        
        // Prevent clicking on cards immediately after shuffling
        setCanClick(false);

        // After a delay, flip the cards to their backs
        setTimeout(() => {
            setCards(cards => cards.map(card => ({ ...card, isFlipped: true })));
            setCanClick(true); // Allow clicking on cards after they've been flipped
        }, 10000); // Adjust the delay as needed
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

                <SwitchButton onSwitch={shuffleAndFlipCards} />
            </div>
        </main>
    );
};

export default App;
