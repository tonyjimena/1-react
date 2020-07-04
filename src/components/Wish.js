import React, { useState } from 'react';
import WishList from './wishComponents/wishList';
import WishInput from './wishComponents/wishInput';
import '../styles/Wish.css'

const initialwishes = [
  { text: 'travel to the moon', done: false },
  { text: 'travel to jupiter', done: false },
  { text: 'travel to malaga', done: true },
];

const Wish = () => {
  const [wishes, setWishes] = useState(initialwishes);

  return (
    <div className="page page--centered">
    <div className="wish-container">
      <h1>WishList</h1>
      <WishInput onNewWish={(wish) => setWishes([wish, ...wishes])} />
      <WishList wishes={wishes} onWishesChange={setWishes} />
      <button 
        className="wish-button" 
        type="button" 
        onClick={() => setWishes(wishes.filter((wish) => !wish.done))}
        >
          Archive done Wishes
      </button>
    </div>
    </div>
  );
};
 
export default Wish;
