import React, { FC } from 'react';
import { ItemType } from '../../types/global';
import RoomBase from '../../components/organism/konva/RoomBase';
import {
  setProblemDialogAction,
} from '../../redux/slices/problem';
import { connect } from 'react-redux';

const Data = ({
  setProblemDialog,
}) => {
  const backgroundImageSrc = '/Data/Data1.png';
  const items: ItemType[] = [
    {
      imageSrc: process.env.PUBLIC_URL + '/Data/6.png',
      id: "0",
      scale: 0.7,
      x: 1550,
      y: 785,
      onClick: () => {
        setProblemDialog({ problemGroupId: 8 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Data/Asset 10.png',
      id: "0",
      scale: 0.7,
      x: 1230,
      y: 760,
      onClick: () => {
        setProblemDialog({ problemGroupId: 39 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Data/Asset 9.png',
      id: "0",
      scale: 0.7,
      x: 1450,
      y: 970,
      onClick: () => {
        setProblemDialog({ problemGroupId: 41 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Data/Asset 2.png',
      id: "0",
      scale: 0.7,
      x: 1800,
      y: 970,
      onClick: () => {
        setProblemDialog({ problemGroupId: 42 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Data/Asset 4.png',
      id: "0",
      scale: 0.7,
      x: 1850,
      y: 1030,
      onClick: () => {
        setProblemDialog({ problemGroupId: 44 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Data/Asset 5.png',
      id: "0",
      scale: 0.7,
      x: 1150,
      y: 1030,
      onClick: () => {
        setProblemDialog({ problemGroupId: 45 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Data/Asset 6.png',
      id: "0",
      scale: 0.7,
      x: 300,
      y: 980,
      onClick: () => {
        setProblemDialog({ problemGroupId: 46 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Data/Asset 8.png',
      id: "0",
      scale: 0.7,
      x: 550,
      y: 990,
      onClick: () => {
        setProblemDialog({ problemGroupId: 47 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Data/Asset 7.png',
      id: "0",
      scale: 0.7,
      x: 430,
      y: 1000,
      disabled: true,
      onClick: () => {
        // TODO IMAN
        // setProblemDialog({ problemGroupId:  })
      },
    },
  ];
  return (
    <RoomBase backgroundImageSrc={backgroundImageSrc} items={items} />
  );
};


export default connect(null, {
  setProblemDialog: setProblemDialogAction,
})(Data);
