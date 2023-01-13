import React, { useState, useEffect } from 'react';

function Targets() {

  const handleClick = () => {
    document.querySelector('.target-list').classList.toggle('hidden');
  };

  return (
    <div className="relative">
      <div className="w-10 h-10 border-4 border-black rounded-[32px] flex justify-center items-center text-lg cursor-pointer" onClick={() => handleClick()} aria-hidden="true">
        <p>3</p>
      </div>
      <div className="target-list absolute right-0 my-4 z-10 p-4 bg-black text-white flex flex-col gap-4 justify-center items-center whitespace-nowrap hidden">
        <div>Homer Simpson (The Simpsons)</div>
        <div>Aang (ATLA)</div>
        <div>Stewie (Family Guy)</div>
      </div>
    </div>
  );
}

export default Targets;
