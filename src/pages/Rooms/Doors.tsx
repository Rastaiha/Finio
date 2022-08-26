import React, { FC } from 'react';
import { ItemType } from '../../types/global';
import RoomBase from './RoomTemplate';

const Doors = () => {
  const backgroundImageSrc = '/Doors/entry-empty.png';
  const items: ItemType[] = [
    {
      imageSrc: process.env.PUBLIC_URL + '/Doors/Data.png',
      id: "0",
      scale: 0.5,
      x: 1620,
      y: 800,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Doors/Algo.png',
      id: "0",
      scale: 0.5,
      x: 910,
      y: 765,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Doors/Hoosh.png',
      id: "0",
      scale: 0.8,
      x: 320,
      y: 560,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Doors/Finio.png',
      id: "0",
      scale: 0.5,
      x: 1205,
      y: 710,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Doors/Source.png',
      id: "0",
      scale: 1,
      x: 1100 ,
      y: 500,
      onClick: () => { },
    },
  ];

  return (
    <RoomBase backgroundImageSrc={backgroundImageSrc} items={items} />
  );
};

export default Doors;
