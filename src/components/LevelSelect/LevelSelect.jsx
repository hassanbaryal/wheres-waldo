import React from 'react';
import { Link } from 'react-router-dom';

function LevelSelect() {
  return (
    <div className="h-screen flex flex-col overflow-auto">
      <header className="min-h-[12vh] relative p-6 flex justify-center items-center">
        <Link to="/" className="absolute self-center left-4 text-2xl">&lt; Back</Link>
        <p className="text-6xl text-center font-bold">Level Select</p>
      </header>
      <div className="grow text-4xl flex flex-col justify-center items-center gap-24">
        <Link to="/mapone">Map One</Link>
        <Link to="/" className="text-zinc-400 pointer-events-none cursor-default line-through">Map Two</Link>
        <Link to="/" className="text-zinc-400 pointer-events-none cursor-default line-through">Map Three</Link>
      </div>
    </div>
  );
}

export default LevelSelect;
