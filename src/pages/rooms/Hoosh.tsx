import React, { FC } from 'react';
import { ItemType } from '../../types/global';
import RoomBase from '../../components/organism/konva/RoomBase';
import {
  setProblemDialogAction,
} from '../../redux/slices/problem';
import { connect } from 'react-redux';

const Hoosh = ({
  setProblemDialog,
}) => {
  const backgroundImageSrc = '/Hoosh/Hooch1.png';
  const items: ItemType[] = [
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/Asset 3.png',
      id: "0",
      scale: 1.3,
      x: 1120,
      y: 530,
      onClick: () => {
        setProblemDialog({ problemGroupId: 1 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/Asset 4.png',
      id: "1",
      x: 742,
      y: 640,
      onClick: () => {
        setProblemDialog({ problemGroupId: 9 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/Layer 2.png',
      id: "3",
      x: 230,
      y: 750,
      onClick: () => {
        setProblemDialog({ problemGroupId: 3 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/evolution poster.png',
      id: "4",
      scale: 0.25,
      x: 1500,
      y: 530,
      onClick: () => {
        setProblemDialog({ problemGroupId: 11 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/Asset 7.png',
      id: "5",
      x: 1645 ,
      y: 435,
      onClick: () => {
        setProblemDialog({ problemGroupId: 40 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/Asset 5.png',
      id: "6",
      x: 800,
      y: 430,
      //disabled: true,
      onClick: () => {
        setProblemDialog({ problemGroupId: 38 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/Asset 1.png',
      id: "7",
      x: 1520,
      y: 610,
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

export default connect(null, {
  setProblemDialog: setProblemDialogAction,
})(Hoosh);