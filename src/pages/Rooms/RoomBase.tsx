import React, { FC } from 'react';
import { Layer, Stage } from 'react-konva';
import useImage from 'use-image';
import URLImage from '../../components/Konva/URLImage';
import Layout from '../../containers/Layout';
import Item from './Item';
import { ItemType } from '../../types/global';

type RoomPropsType = {
  items: ItemType[];
  backgroundImageSrc: string;
}

const Room: FC<RoomPropsType> = ({ backgroundImageSrc, items }) => {
  const [backgroundImage] = useImage(process.env.PUBLIC_URL + backgroundImageSrc);
  const scaleY = window.innerHeight / backgroundImage?.height;


  return (
    <Layout backgroundImage={backgroundImageSrc}>
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
              key={item.id}
              data={item} />
          ))}
        </Layer>
      </Stage>
    </Layout>
  );
};

export default Room;
