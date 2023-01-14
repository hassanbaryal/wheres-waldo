import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import Timer from '../../MapComponents/Timer/Timer';
import mapOneImg from '../../../assets/map-one.jpg';
import TargetSelectorPopUp from '../../MapComponents/TargetSelectorPopUp/TargetSelectorPopUp';
import Targets from '../../MapComponents/Targets/Targets';
import Loader from '../../Loader/Loader';
import { app, db } from '../../../firebase-config';

function MapOne() {
  const collectionRef = collection(db, 'maps');
  // For timer
  const [counter, setCounter] = useState(0);
  const [counterStop, setCounterStop] = useState(false);
  // For popup when clicking on map
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [xCoord, setXCoord] = useState(0);
  const [yCoord, setYCoord] = useState(0);
  // Variable to store map data (fetch it). Temporarily filled
  const [map, setMap] = useState(null);

  // {
  //   characters: [
  //     {
  //       name: 'Homer Simpson (The Simpsons)',
  //       location: null,
  //     },
  //     {
  //       name: 'Aang (ATLA)',
  //       location: null,
  //     },
  //     {
  //       name: 'Stewie (Family guy)',
  //       location: null,
  //     },
  //   ],
  // }

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

  const getData = async () => {
    try {
      const response = await getDocs(collectionRef);
      const allMaps = response.docs.map((item) => item.data());
      setMap(allMaps.find((item) => item.name === 'mapone'));
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (document.querySelector('img')) document.querySelector('img').addEventListener('click', handleClick);
    return () => {
      if (document.querySelector('img')) document.querySelector('img').removeEventListener('click', handleClick);
    };
  }, [popUpVisible, map]);

  if (!map) {
    return (
      <Loader />
    );
  }

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
          <Targets
            characters={map.characters}
          />
        </div>
      </header>
      <div className="relative">
        <img src={mapOneImg} alt="" />
        {
          popUpVisible
          && (
          <TargetSelectorPopUp
            xCoord={xCoord}
            yCoord={yCoord}
            characters={map.characters}
          />
          )
        }
      </div>
    </div>
  );
}

export default MapOne;
