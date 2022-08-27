import React, { FC } from 'react';
import { ItemType } from '../../types/global';
import RoomBase from '../../components/organism/konva/RoomBase';
import { useNavigate } from 'react-router-dom';
import { setProblemDialogAction } from '../../redux/slices/problem';
import { connect } from 'react-redux';

const Doors = () => {
  const navigate = useNavigate();
  const backgroundImageSrc = '/Doors/entry-empty.png';
  const items: ItemType[] = [
    {
      imageSrc: process.env.PUBLIC_URL + '/Doors/Data.png',
      id: "0",
      scale: 0.45,
      x: 710,
      y: 345,
      onClick: () => {
        navigate('/room/data/')
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Doors/Algo.png',
      id: "0",
      scale: 0.45,
      x: 402,
      y: 335,
      onClick: () => {
        navigate('/room/algorithm/')
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Doors/Hoosh.png',
      id: "0",
      scale: 0.73,
      x: 225,
      y: 395,
      onClick: () => {
        navigate('/room/hoosh/')
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Doors/Finio.png',
      id: "0",
      scale: 0.45,
      x: 530,
      y: 318,
      onClick: () => {
        navigate('/room/finio1/')
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Doors/Source.png',
      id: "0",
      scale: 0.87,
      x: 965,
      y: 434,
      onClick: () => {
        navigate('/room/source/')
      },
    },
  ];

  return (
    <RoomBase backgroundImageSrc={backgroundImageSrc} items={items} />
  );
};

export default connect(null, {
  setProblemDialog: setProblemDialogAction,
})(Doors);
