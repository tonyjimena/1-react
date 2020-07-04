import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const WishItem = ({
  done, text, id, onDoneChange,
}) => {
  const [age, setAge] = useState(0);
  useEffect(() => {
    let ageInterval;
    if (done) {
      setAge(0);
    } else {
      ageInterval = setInterval(() => {
        if (done) {
          clearInterval();
        } else {
          setAge((a) => a + 1);
        }
      }, 1000);
    }
    return () => clearInterval(ageInterval);
  }, [done]);
  return (
    <li
      className={`wish-list__item 
      ${done ? 'wish-list__item--done' : ''}
      ${age > 5 && age < 10 ? 'wish-list__item--warning' : ''}
      ${age >= 10 ? 'wish-list__item--danger' : ''}
      `}
    >
      <label className="wish-list__label" htmlFor={id}>{text}</label>
      <input className="wish-list__checkbox" id={id} type="checkbox" defaultChecked={done} onChange={(e) => onDoneChange(e.target.checked)} />
    </li>
  );
};

WishItem.propTypes = {
  text: PropTypes.string,
  done: PropTypes.bool,
  id: PropTypes.string,
  onDoneChange: PropTypes.func,
};

WishItem.defaultProps = {
  text: '',
  done: false,
  id: '',
  onDoneChange: () => {},
};

export default WishItem;
