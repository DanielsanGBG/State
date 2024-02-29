import React, { useState } from 'react';

function Progress() {
  const [value, setValue] = useState(0);

  function increase() {
    console.log('increase');
    if (value <= 9) {
      setValue(value + 1);
    }
  }
  function decrease() {
    console.log('decrease');
    if (value >= 1) {
      setValue(value - 1);
    }
  }

  return (
    <div className="progress">
      <p>{value}</p>
      <div>
        <span style={{ width: `${value * 10}%` }}></span>
      </div>
      <span>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </span>
    </div>
  );
}

export default Progress;
