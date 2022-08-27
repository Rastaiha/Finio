import React, { FC } from 'react';
import { ItemType } from '../../types/global';
import RoomBase from '../../components/organism/konva/RoomBase';
import {
  setProblemDialogAction,
} from '../../redux/slices/problem';
import { connect } from 'react-redux';

const Algorithm = ({
  setProblemDialog,
}) => {
  const backgroundImageSrc = '/Algorithm/Algor1.png';
  const items: ItemType[] = [
    {
      imageSrc: process.env.PUBLIC_URL + '/Algorithm/Asset 1.png',
      id: "0",
      scale: 2,
      x: 1370,
      y: 650,
      onClick: () => {
        setProblemDialog({ problemGroupId: 7 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Algorithm/Asset 2.png',
      id: "0",
      scale: 2,
      x: 874,
      y: 642,
      onClick: () => {
        setProblemDialog({ problemGroupId: 2 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Algorithm/Asset 3.png',
      id: "0",
      scale: 1,
      x: 60,
      y: 700,
      onClick: () => {
        setProblemDialog({ problemGroupId: 4 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Algorithm/Asset 4.png',
      id: "0",
      scale: 1.7,
      x: 260,
      y: 850,
      onClick: () => {
        setProblemDialog({ problemGroupId: 6 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Algorithm/Asset 5.png',
      id: "0",
      scale: 1.7,
      x: 860,
      y: 880,
      onClick: () => {
        setProblemDialog({ problemGroupId: 10 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Algorithm/Asset 6.png',
      id: "0",
      scale: 1.7,
      x: 1680,
      y: 820,
      onClick: () => {
        setProblemDialog({ problemGroupId: 14 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Algorithm/Asset 7.png',
      id: "0",
      scale: 1,
      x: 870,
      y: 370,
      onClick: () => {
        setProblemDialog({ problemGroupId: 18 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Algorithm/Asset 8.png',
      id: "0",
      scale: 1.7,
      x: 750,
      y: 450,
      onClick: () => {
        setProblemDialog({ problemGroupId: 20 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Algorithm/Asset 9.png',
      id: "0",
      scale: 1.3,
      x: 350,
      y: 750,
      onClick: () => {
        setProblemDialog({ problemGroupId: 22 })
      },
    },
  ];

  return (
    <RoomBase backgroundImageSrc={backgroundImageSrc} items={items} />
  );
};

export default connect(null, {
  setProblemDialog: setProblemDialogAction,
})(Algorithm);
