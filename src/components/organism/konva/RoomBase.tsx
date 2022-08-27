import React, { FC } from 'react';
import {
  Box,
} from '@mui/material';
import { Layer, Stage } from 'react-konva';
import useImage from 'use-image';
import URLImage from '../../Konva/URLImage';
import Item from '../../molecules/konva/Item';
import { ItemType } from '../../../types/global';

type RoomPropsType = {
  items: ItemType[];
  backgroundImageSrc: string;
}

const Room: FC<RoomPropsType> = ({ backgroundImageSrc, items }) => {
  const [backgroundImage] = useImage(process.env.PUBLIC_URL + backgroundImageSrc);
  const scaleY = window.innerHeight / backgroundImage?.height;

  return (
    <>
      <Box sx={{
        transform: 'scale(1.1)',
        height: '100vh',
        width: '100%',
        position: 'fixed',
        top: '0',
        left: '0',
        background: `url(${process.env.PUBLIC_URL + backgroundImageSrc}) no-repeat center center fixed`,
        opacity: '0.5',
        backgroundSize: 'cover',
        zIndex: '-1',
        animation: 'show-back 0.8s 0.3s both',
        filter: 'blur(3px)',
      }} />
      <Stage
        width={Math.min(backgroundImage?.width * scaleY, window.innerWidth)}
        height={window.innerHeight}>
        <Layer
          draggable
          dragBoundFunc={(pos) => {
            pos.y = 0;
            if (window.innerWidth < backgroundImage?.width * scaleY) {
              if (pos.x > 0) pos.x = 0;
              if (pos.x < window.innerWidth - backgroundImage?.width * scaleY)
                pos.x = window.innerWidth - backgroundImage?.width * scaleY;
            } else {
              pos.x = 0;
            }
            return pos;
          }}>
          <URLImage
            scaleX={scaleY}
            scaleY={scaleY}
            src={process.env.PUBLIC_URL + backgroundImageSrc}
          />
          {items.map((item) => (
            <Item
              parentScale={scaleY}
              key={item.id}
              data={item} />
          ))}
        </Layer>
      </Stage>
    </>
  );
};

export default Room;
