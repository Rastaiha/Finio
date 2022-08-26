import React, { FC } from 'react';
import { ItemType } from '../../types/global';
import RoomBase from './RoomTemplate';

const Doors = () => {
  const backgroundImageSrc = '/Doors/entry-empty.png';
  const items: ItemType[] = [
    {
      imageSrc: process.env.PUBLIC_URL + '/Doors/Data.png',
      id: "0",
      scale: 1,
      x: 800,
      y: 390,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Doors/Algo.png',
      id: "0",
      scale: 1,
      x: 800,
      y: 390,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Doors/Hoosh.png',
      id: "0",
      scale: 1,
      x: 800,
      y: 390,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Doors/Finio.png',
      id: "0",
      scale: 1,
      x: 800,
      y: 390,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Doors/Source.png',
      id: "0",
      scale: 1,
      x: 800,
      y: 390,
      onClick: () => { },
    },
  ];

  return (
    <RoomBase backgroundImageSrc={backgroundImageSrc} items={items} />
  );
};

export default Doors;
