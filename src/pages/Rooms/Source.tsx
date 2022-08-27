import React, { FC } from 'react';
import { ItemType } from '../../types/global';
import RoomBase from './RoomTemplate';
import {
  setProblemDialogAction,
} from '../../redux/slices/problem';
import { connect } from 'react-redux';

const Source = () => {
  const backgroundImageSrc = '/Source/Source1.png';
  const items: ItemType[] = [
    {
        imageSrc: process.env.PUBLIC_URL + '/Source/Asset 7.png',
        id: "0",
        scale: 1,
        x: 250,
        y: 480,
        onClick: () => {
          setProblemDialog({ problemGroupId: 5 })
        },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Source/Asset 8.png',
        id: "0",
        scale: 1,
        x: 360,
        y: 470,
        onClick: () => {
          setProblemDialog({ problemGroupId: 33 })
        },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Source/Asset 6.png',
        id: "0",
        scale: 1,
        x: 450,
        y: 497,
        onClick: () => {
          setProblemDialog({ problemGroupId: 28 })
        },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Source/Asset 5.png',
        id: "0",
        scale: 0.7,
        x: 250,
        y: 900,
        onClick: () => {
          setProblemDialog({ problemGroupId: 29 })
        },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Source/Asset 4.png',
        id: "0",
        scale: 0.7,
        x: 1420,
        y: 547,
        onClick: () => {
          setProblemDialog({ problemGroupId: 30 })
        },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Source/Asset 3.png',
        id: "0",
        scale: 0.7,
        x: 1870,
        y: 420,
        onClick: () => {
          setProblemDialog({ problemGroupId: 31 })
        },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Source/Asset 2.png',
        id: "0",
        scale: 0.7,
        x: 1765,
        y: 690,
        onClick: () => {
          setProblemDialog({ problemGroupId: 32 })
        },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Source/Asset 1.png',
        id: "0",
        scale: 0.7,
        x: 1600,
        y: 900,
        disabled: true,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Source/Asset 1.png',
        id: "0",
        scale: 0.7,
        x: 1600,
        y: 850,
        disabled: true,
        onClick: () => { },
      },
      {
        imageSrc: process.env.PUBLIC_URL + '/Source/Asset 1.png',
        id: "0",
        scale: 0.7,
        x: 1600,
        y: 800,
        //disabled: true,
        onClick: () => {
          setProblemDialog({ problemGroupId: 37 })
        },
      },
      
  ];

  return (
    <RoomBase backgroundImageSrc={backgroundImageSrc} items={items} />
  );
};

export default Source;
