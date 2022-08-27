import React, { FC } from 'react';
import { ItemType } from '../../types/global';
import RoomBase from '../../components/organism/konva/RoomBase';
import {
  setProblemDialogAction,
} from '../../redux/slices/problem';
import { connect } from 'react-redux';

const Finio2 = ({

}) => {
  const backgroundImageSrc = '/Finio2/Background.png';
  const items: ItemType[] = [
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest 03.png',
      id: "0",
      scale: 1,
      x: 4000,
      y: 4000,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest 02.png',
      id: "0",
      scale: 1,
      x: 4000,
      y: 3500,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest 01.png',
      id: "0",
      scale: 1,
      x: 4000,
      y: 3000,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest 04.png',
      id: "0",
      scale: 1,
      x: 7000,
      y: 3000,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest 05.png',
      id: "0",
      scale: 1,
      x: 7000,
      y: 3500,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest 06.png',
      id: "0",
      scale: 1,
      x: 7000,
      y: 4000,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest 09.png',
      id: "0",
      scale: 1,
      x: 6000,
      y: 4000,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest 08.png',
      id: "0",
      scale: 1,
      x: 6000,
      y: 3500,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest 07.png',
      id: "0",
      scale: 1,
      x: 6000,
      y: 3000,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest 10.png',
      id: "0",
      scale: 1,
      x: 5000,
      y: 3000,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest 11.png',
      id: "0",
      scale: 1,
      x: 5000,
      y: 3500,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Finio2/Chest 12.png',
      id: "0",
      scale: 1,
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
