import React, { useState, useEffect } from 'react';

function TargetSelectorPopUp({ xCoord, yCoord }) {
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
      <div className="w-32 p-2 text-white bg-slate-700 flex flex-col items-center gap-2">
        <button type="button" className="w-full h-7 border-2 border-white">One</button>
        <button type="button" className="w-full h-7 border-2 border-white">Two</button>
        <button type="button" className="w-full h-7 border-2 border-white">Three</button>
      </div>
    </div>
  );
}

export default TargetSelectorPopUp;
