import React from 'react';

export default function Setup({handleSelection}) {
 
  return (
    <div>
      <p>How many players?</p>
      <button onClick={() => handleSelection(1)}>1</button>
      <button onClick={() => handleSelection(2)}>2</button>
      <button onClick={() => handleSelection(3)}>3</button>
      <button onClick={() => handleSelection(4)}>4</button>
    </div>
  );
}