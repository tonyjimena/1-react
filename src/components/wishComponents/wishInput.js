import React, { useState } from 'react';
import PropTypes from 'prop-types';

// const createWish = (text) => ({ done: false, text });

const WishInput = ({ onNewWish }) => {
  const [newWishText, setNewWishText] = useState('');
  return (
    <fieldset className="wish-input__fieldset">
      <legend>New Wish</legend>
      <input
        className="wish-input__input"
        type="text"
        placeholder="Wish here"
        value={newWishText}
        onChange={(e) => setNewWishText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter' && newWishText.length) {
            onNewWish({ done: false, text: newWishText });
            setNewWishText('');
          }
        }}
      />
    </fieldset>
  );
};

WishInput.propTypes = {
  onNewWish: PropTypes.func,
};

WishInput.defaultProps = {
  onNewWish: () => {},
};

export default WishInput;
