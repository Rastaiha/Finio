import React, { FC, useState } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';
import { ItemType } from '../../../types/global';

type ItemPropsType = {
  data: ItemType;
  parentScale: number;
}

const Item: FC<ItemPropsType> = ({
  data,
  parentScale,
}) => {
  const [hover, setHover] = useState(false);
  const [image] = useImage(data.imageSrc);

  if (!image) {
    return (<></>)
  }

  const selfScale = data.scale ? data.scale : 1;

  return (
    <Image
      image={image}
      offsetX={image.width / 2}
      offsetY={image.height / 2}
      key={data.id}
      id={data.id}
      x={data.x * parentScale}
      y={data.y * parentScale}
      opacity={1}
      scaleX={(hover && !data.disabled) ? (parentScale * selfScale) + 0.03 : (parentScale * selfScale)}
      scaleY={(hover && !data.disabled) ? (parentScale * selfScale) + 0.03 : (parentScale * selfScale)}

      onTap={(e) => {
        setHover(true);
        setTimeout(() => {
          setHover(false);
        }, 200)
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}

      onDblTap={() => {
        if (!data.disabled) {
          data.onClick();
        }
      }}
      onClick={() => {
        if (!data.disabled) {
          data.onClick();
        }
      }}
    />
  )
}
export default Item;