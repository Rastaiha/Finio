import React, { FC } from 'react';
import { ItemType } from '../../types/global';
import RoomBase from './RoomTemplate';

const Finio2 = () => {
  const backgroundImageSrc = '/Finio2/Background.png';
  const items: ItemType[] = [
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest.png',
      id: "0",
      scale: 0.15,
      x: 8000,
      y: 4000,
      onClick: () => { },
    },
    {
        imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest.png',
        id: "0",
        scale: 0.15,
        x: 8000,
        y: 3500,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest.png',
        id: "0",
        scale: 0.15,
        x: 8000,
        y: 3000,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest.png',
        id: "0",
        scale: 0.15,
        x: 7000,
        y: 3000,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest.png',
        id: "0",
        scale: 0.15,
        x: 7000,
        y: 3500,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest.png',
        id: "0",
        scale: 0.15,
        x: 7000,
        y: 4000,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest.png',
        id: "0",
        scale: 0.15,
        x: 6000,
        y: 4000,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest.png',
        id: "0",
        scale: 0.15,
        x: 6000,
        y: 3500,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest.png',
        id: "0",
        scale: 0.15,
        x: 6000,
        y: 3000,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest.png',
        id: "0",
        scale: 0.15,
        x: 5000,
        y: 3000,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest.png',
        id: "0",
        scale: 0.15,
        x: 5000,
        y: 3500,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest.png',
        id: "0",
        scale: 0.15,
        x: 5000,
        y: 4000,
        onClick: () => { },
      },
    
  ];

  return (
    <RoomBase backgroundImageSrc={backgroundImageSrc} items={items} />
  );
};

export default Finio2;
