import './App.css';
import {
  useState,
  useEffect,
} from 'react';
import Card from './components/Card';
import {
  shuffle,
  generateCards,
} from './helper/helperFunctions';

function App() {
  const initialCards = shuffle(
    generateCards(8)
  );
  const [cards, setCards] = useState(
    initialCards
  );
  const [
    toCheck,
    setToCheck,
  ] = useState([]);
  const handleClick = (i) => {
    const nextCards = [...cards];
    nextCards[i].isFlipped = true;
    const nextCheck = [...toCheck];
    nextCheck.push(nextCards[i]);
    setCards(nextCards);
    setToCheck(nextCheck);
  };

  const handleReset = () => {
    const nextCards = shuffle(
      initialCards
    );
    setCards(nextCards);
  };

  useEffect(() => {
    console.log(toCheck);
    if (toCheck.length === 2) {
      if (
        toCheck[0].num !==
        toCheck[1].num
      ) {
        setTimeout(() => {
          const nextCards = cards.map(
            (card) => {
              if (
                card.index ===
                  toCheck[0].index ||
                card.index ===
                  toCheck[1].index
              ) {
                card.isFlipped = false;
                return card;
              } else {
                return card;
              }
            }
          );
          setCards(nextCards);
        }, 1000);
      }
      setToCheck([]);
    }
  }, [toCheck, cards]);

  return (
    <div className='App'>
      <button onClick={handleReset}>
        Reset
      </button>
      <div className='cards-container'>
        {cards.map((card, i) => (
          <Card
            card={card}
            key={i}
            index={i}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
