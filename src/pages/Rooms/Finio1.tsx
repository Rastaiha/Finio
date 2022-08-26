import React, { FC } from 'react';
import { ItemType } from '../../types/global';
import RoomBase from './RoomTemplate';

const Finio1 = () => {
  const backgroundImageSrc = '/Finio1/Background.png';
  const items: ItemType[] = [
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio1/Asset 05.png',
      id: "0",
      scale: 0.15,
      x: 7800,
      y: 3550,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio1/Asset 03.png',
      id: "1",
      scale: 0.15,
      x: 1480,
      y: 1550,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio1/Asset 08.png',
      id: "3",
      scale: 0.15,
      x: 7000,
      y: 3250,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio1/Asset 07.png',
      id: "4",
      scale: 0.15,
      x: 8250,
      y: 1500,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio1/Asset 06.png',
      id: "5",
      scale: 0.15,
      x: 8900,
      y: 3100,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio1/Asset 04.png',
      id: "6",
      scale: 0.15,
      x: 2000,
      y: 3900,
      //disabled: true,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio1/Asset 02.png',
      id: "7",
      scale: 0.15,
      x: 1500,
      y: 2800,
      //disabled: true,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio1/Asset 01.png',
      id: "7",
      scale: 0.15,
      x: 4800,
      y: 2800,
      //disabled: true,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio1/Asset 09.png',
      id: "7",
      scale: 0.15,
      x: 2350,
      y: 3600,
      //disabled: true,
      onClick: () => { },
    },
  ];

  return (
    <RoomBase backgroundImageSrc={backgroundImageSrc} items={items} />
  );
};

export default Finio1;
