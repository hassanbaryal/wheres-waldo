import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../../MapComponents/Timer/Timer';
import mapOneImg from '../../../assets/map-one.jpg';
import TargetSelectorPopUp from '../../MapComponents/TargetSelectorPopUp/TargetSelectorPopUp';
import Targets from '../../MapComponents/Targets/Targets';

function MapOne() {
  const [counter, setCounter] = useState(0);
  const [counterStop, setCounterStop] = useState(false);
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [xCoord, setXCoord] = useState(0);
  const [yCoord, setYCoord] = useState(0);

  const handleClick = (e) => {
    if (!popUpVisible) {
      setXCoord(e.offsetX);
      setYCoord(e.offsetY);
      setPopUpVisible(true);
      return true;
    }
    setPopUpVisible(false);
    return false;
  };

  useEffect(() => {
    document.querySelector('img').addEventListener('click', handleClick);

    return () => {
      document.querySelector('img').removeEventListener('click', handleClick);
    };
  }, [popUpVisible]);

  return (
    <div className="relative h-screen flex flex-col overflow-auto">
      <header className="min-h-[12vh] relative p-6 flex justify-between items-center">
        <Link to="/levelselect" className=" text-xl">&lt; Exit</Link>
        <Timer
          counter={counter}
          setCounter={setCounter}
          counterStop={counterStop}
        />
        <div className="flex justify-center items-center gap-6">
          <p>Tap for Targets:</p>
          <Targets />
        </div>
      </header>
      <div className="relative">
        <img src={mapOneImg} alt="" />
        {
          popUpVisible && <TargetSelectorPopUp xCoord={xCoord} yCoord={yCoord} />
        }
      </div>
    </div>
  );
}

export default MapOne;
