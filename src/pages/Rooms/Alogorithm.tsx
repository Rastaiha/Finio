import React, { FC } from 'react';
import { ItemType } from '../../types/global';
import RoomBase from './RoomTemplate';

const Algorithm = () => {
  const backgroundImageSrc = '/Algorithm/Algor1.png';
  const items: ItemType[] = [
    {
      imageSrc: process.env.PUBLIC_URL + '/Algorithm/Asset 1.png',
      id: "0",
      scale: 1.7,
      x: 600,
      y: 288,
      onClick: () => { },
    },
    {
        imageSrc: process.env.PUBLIC_URL + '/Algorithm/Asset 2.png',
        id: "0",
        scale: 1.7,
        x: 380,
        y: 278,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Algorithm/Asset 3.png',
        id: "0",
        scale: 1,
        x: 40,
        y: 520,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Algorithm/Asset 4.png',
        id: "0",
        scale: 1,
        x: 200,
        y: 640,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Algorithm/Asset 5.png',
        id: "0",
        scale: 1.2,
        x: 540,
        y: 540,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Algorithm/Asset 6.png',
        id: "0",
        scale: 1.2,
        x: 1035,
        y: 515,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Algorithm/Asset 7.png',
        id: "0",
        scale: 1.2,
        x: 860,
        y: 335,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Algorithm/Asset 8.png',
        id: "0",
        scale: 1.2,
        x: 460,
        y: 300,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Algorithm/Asset 9.png',
        id: "0",
        scale: 1.2,
        x: 350,
        y: 540,
        onClick: () => { },
      },
  ];

  return (
    <RoomBase backgroundImageSrc={backgroundImageSrc} items={items} />
  );
};

export default Algorithm;
