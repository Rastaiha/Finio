import React, { FC } from 'react';
import { ItemType } from '../../types/global';
import RoomBase from './RoomTemplate';
import {
  setProblemDialogAction,
} from '../../redux/slices/problem';
import { connect } from 'react-redux';

const Hoosh = () => {
  const backgroundImageSrc = '/Hoosh/Hooch1.png';
  const items: ItemType[] = [
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/Asset 3.png',
      id: "0",
      scale: 1,
      x: 800,
      y: 390,
      onClick: () => {
        setProblemDialog({ problemGroupId: 1 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/Asset 4.png',
      id: "1",
      x: 550,
      y: 470,
      onClick: () => {
        setProblemDialog({ problemGroupId: 9 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/Layer 2.png',
      id: "3",
      x: 180,
      y: 550,
      onClick: () => {
        setProblemDialog({ problemGroupId: 3 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/evolution poster.png',
      id: "4",
      scale: 0.25,
      x: 4400,
      y: 1600,
      onClick: () => {
        setProblemDialog({ problemGroupId: 11 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/Asset 7.png',
      id: "5",
      x: 1220,
      y: 315,
      onClick: () => {
        setProblemDialog({ problemGroupId: 40 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/Asset 5.png',
      id: "6",
      x: 320,
      y: 355,
      //disabled: true,
      onClick: () => {
        setProblemDialog({ problemGroupId: 38 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/Asset 1.png',
      id: "7",
      x: 1120,
      y: 450,
      //disabled: true,
      onClick: () => {
        setProblemDialog({ problemGroupId: 43 })
      },
    },
  ];

  return (
    <RoomBase backgroundImageSrc={backgroundImageSrc} items={items} />
  );
};

export default Hoosh;
