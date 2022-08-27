import React, { FC } from 'react';
import { ItemType } from '../../types/global';
import RoomBase from '../../components/organism/konva/RoomBase';
import {
  setProblemDialogAction,
} from '../../redux/slices/problem';
import { connect } from 'react-redux';

const SourceCoding = ({
  setProblemDialog,
}) => {
  const backgroundImageSrc = '/Source/Source1.png';
  const items: ItemType[] = [
    {
      imageSrc: process.env.PUBLIC_URL + '/Source/Asset 7.png',
      id: "0",
      scale: 1,
      x: 400,
      y: 660,
      onClick: () => {
        setProblemDialog({ problemGroupId: 5 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Source/Asset 8.png',
      id: "0",
      scale: 1,
      x: 480,
      y: 650,
      onClick: () => {
        setProblemDialog({ problemGroupId: 33 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Source/Asset 6.png',
      id: "0",
      scale: 1,
      x: 600,
      y: 680,
      onClick: () => {
        setProblemDialog({ problemGroupId: 28 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Source/Asset 5.png',
      id: "0",
      scale: 1,
      x: 250,
      y: 850,
      onClick: () => {
        setProblemDialog({ problemGroupId: 29 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Source/Asset 4.png',
      id: "0",
      scale: 1,
      x: 1333,
      y: 515,
      onClick: () => {
        setProblemDialog({ problemGroupId: 30 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Source/Asset 3.png',
      id: "0",
      scale: 1,
      x: 1800,
      y: 390,
      onClick: () => {
        setProblemDialog({ problemGroupId: 31 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Source/Asset 2.png',
      id: "0",
      scale: 1,
      x: 1765,
      y: 850,
      onClick: () => {
        setProblemDialog({ problemGroupId: 32 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Source/Asset 1.png',
      id: "0",
      scale: 1,
      x: 1450,
      y: 900,
      disabled: true,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Source/Asset 1.png',
      id: "0",
      scale: 1,
      x: 1450,
      y: 850,
      disabled: true,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Source/Asset 1.png',
      id: "0",
      scale: 1,
      x: 1450,
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


export default connect(null, {
  setProblemDialog: setProblemDialogAction,
})(SourceCoding);
