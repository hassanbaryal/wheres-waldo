import React, { useState, useEffect } from 'react';

function TargetSelectorPopUp({ xCoord, yCoord, characters }) {
  const [style, setStyle] = useState({
    top: `${yCoord}px`,
    left: `${xCoord}px`,
  });

  useEffect(() => {
    const targetBox = document.querySelector('.target-box');
    setStyle({
      top: `${yCoord - (targetBox.offsetWidth / 2)}px`,
      left: `${xCoord - (targetBox.offsetWidth / 2)}px`,
    });
  }, []);

  return (
    <div style={style} className="absolute flex">
      <div className="target-box w-9 h-9 border-4 border-dashed border-red-500" />
      <div className="min-w-[128px] p-2 text-white bg-slate-700 flex flex-col items-center gap-2">
        {
          characters.map((character) => (
            <button key={character.name} type="button" className="w-full border-2 border-white p-2">{character.name}</button>
          ))
        }
      </div>
    </div>
  );
}

export default TargetSelectorPopUp;
