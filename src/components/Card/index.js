import React from 'react';
import classnames from 'classnames';

import './index.css';

export default function Card(props) {
  const {
    card,
    handleClick,
    index,
  } = props;
  return (
    <div
      className={classnames({
        'card-container': true,
        flip: card.isFlipped,
      })}
      onClick={() => handleClick(index)}
    >
      <div className='front'></div>
      <div className='back'>
        <h1>{card.num}</h1>
      </div>
    </div>
  );
}
