import React, { FC } from 'react';
import { ItemType } from '../../types/global';
import RoomBase from './RoomTemplate';

const Data = () => {
  const backgroundImageSrc = '/Data/Data1.png';
  const items: ItemType[] = [
    {
      imageSrc: process.env.PUBLIC_URL + '/Data/6.png',
      id: "0",
      scale: 0.7,
      x: 1550,
      y: 785,
      onClick: () => { },
    },
    {
        imageSrc: process.env.PUBLIC_URL + '/Data/Asset 10.png',
        id: "0",
        scale: 0.7,
        x: 1230,
        y: 760,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Data/Asset 9.png',
        id: "0",
        scale: 0.7,
        x: 1450,
        y: 970,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Data/Asset 2.png',
        id: "0",
        scale: 0.7,
        x: 1800,
        y: 970,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Data/Asset 4.png',
        id: "0",
        scale: 0.7,
        x: 1850,
        y: 1030,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Data/Asset 5.png',
        id: "0",
        scale: 0.7,
        x: 1150,
        y: 1030,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Data/Asset 6.png',
        id: "0",
        scale: 0.7,
        x: 300,
        y: 980,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Data/Asset 8.png',
        id: "0",
        scale: 0.7,
        x: 550,
        y: 990,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Data/Asset 7.png',
        id: "0",
        scale: 0.7,
        x: 430,
        y: 1000,
        onClick: () => { },
      },
  ];

  return (
    <RoomBase backgroundImageSrc={backgroundImageSrc} items={items} />
  );
};

export default Data;
