import React from 'react';

export default function Counter() {
  const [count, setCount] = React.useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    if (count < 1) return;
    setCount(count - 1);
  }
  return (
    <div className='counter-container'>
      <div className='counter'>
        <div onClick={decrease} className='counter-change' id='minus'>
          -
        </div>
        <div className='counter-number'>{count}</div>
        <div onClick={increase} className='counter-change' id='plus'>
          +
        </div>
      </div>
    </div>
  );
}
