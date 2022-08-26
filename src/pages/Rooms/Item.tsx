import React, { FC, useState } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';
import { ItemType } from '../../types/global';

type ItemPropsType = {
  data: ItemType;
}

const Item: FC<ItemPropsType> = ({
  data,
}) => {
  const [hover, setHover] = useState(false);
  const [image] = useImage(data.imageSrc);

  if (!image) {
    return (<></>)
  }

  const scale = data.scale ? data.scale : 1;

  return (
    <Image
      image={image}
      offsetX={image.width / 2}
      offsetY={image.height / 2}
      key={data.id}
      id={data.id}
      x={data.x * scale}
      y={data.y * scale}
      opacity={1}
      scaleX={(hover && !data.disabled) ? scale + 0.05 : scale}
      scaleY={(hover && !data.disabled) ? scale + 0.05 : scale}

      onTap={(e) => {
        setHover(true);
        setTimeout(() => {
          setHover(false);
        }, 200)
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}

      onDblTap={data.onClick}
      onClick={data.onClick}
    />
  )
}
export default Item;