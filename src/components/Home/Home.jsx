import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="h-screen flex flex-col overflow-auto">
      <header className="min-h-[12vh] p-6 flex justify-center items-center">
        <p className="text-6xl text-center font-bold">Where&apos;s Waldo (Type) Game</p>
      </header>
      <div className="grow text-4xl flex flex-col justify-center items-center gap-24">
        <Link to="/levelselect">Level Select</Link>
        <Link to="/highscores">Highscores</Link>
      </div>
    </div>
  );
}

export default Home;
