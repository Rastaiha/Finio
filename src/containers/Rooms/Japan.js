import makeStyles from '@mui/styles/makeStyles';
import React, { useState } from 'react';
import { Image, Layer, Stage, Star, Text } from 'react-konva';
import { useNavigate } from 'react-router-dom';
import useImage from 'use-image';

import GetProblem from '../../components/Dialog/GetProblem'
import URLImage from '../../components/Konva/URLImage';
import Layout from '../Layout';
import ItemImage from './ItemImage';

const Page = () => {
  let navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [groupProblemId, setGroupProblemId] = useState();
  const BACKGROUND_IMAGE = '/japan/japan room - empty.png';
  const [image] = useImage(process.env.PUBLIC_URL + BACKGROUND_IMAGE);
  const scaleY = window.innerHeight / image?.height;
  const [objects, setObjects] = useState([
    {
      urlImage: process.env.PUBLIC_URL + '/japan/sushi.png',
      id: 0,
      x: 1005,
      y: 638,
      isHover: false,
      onClick: () => {
        setGroupProblemId(17);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/japan/chance cat.png',
      id: 1,
      x: 380,
      y: 550,
      isHover: false,
      onClick: () => {
        setGroupProblemId(8);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/japan/cherry blossom vase.png',
      id: 3,
      x: 710,
      y: 470,
      isHover: false,
      onClick: () => {
        setGroupProblemId(37);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/japan/dragon.png',
      id: 4,
      x: 240,
      y: 230,
      isHover: false,
      onClick: () => {
        setGroupProblemId(35);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/japan/katana.png',
      id: 5,
      x: 130,
      y: 698,
      isHover: false,
      onClick: () => {
        setGroupProblemId(18);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/japan/japan frame.png',
      id: 6,
      x: 1220,
      y: 235,
      disabled: true,
      isHover: false,
      onClick: () => { },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/japan/door.png',
      id: 7,
      x: 1330,
      y: 750,
      disabled: true,
      isHover: false,
      onClick: () => { },
    },
  ]);

  const goForward = (dst) => {
    navigate(dst);
  };

  const handleMouseEnter = (e) => {
    const id = e.target.id();
    setObjects(
      objects.map((star) => {
        return {
          ...star,
          isHover: star.id === id,
        };
      })
    );
  };

  const handleMouseExit = (e) => {
    setObjects(
      objects.map((star) => {
        return {
          ...star,
          isHover: false,
        };
      })
    );
  };

  return (
    <Layout backgroundImage={BACKGROUND_IMAGE}>
      <Stage
        width={Math.min(image?.width * scaleY, window.innerWidth)}
        height={window.innerHeight}>
        <Layer
          draggable
          dragBoundFunc={(pos) => {
            pos.y = 0;
            if (window.innerWidth < image?.width * scaleY) {
              if (pos.x > 0) pos.x = 0;
              if (pos.x < window.innerWidth - image?.width * scaleY)
                pos.x = window.innerWidth - image?.width * scaleY;
            } else {
              pos.x = 0;
            }
            return pos;
          }}>
          <URLImage
            scaleX={scaleY}
            scaleY={scaleY}
            src={process.env.PUBLIC_URL + BACKGROUND_IMAGE}
          />
          {objects.map((object) => (
            <ItemImage
              key={object.id}
              object={object}
              scale={scaleY}
              handleMouseEnter={handleMouseEnter}
              handleMouseExit={handleMouseExit}
            />
          ))}
        </Layer>
      </Stage>
      <GetProblem
        open={openDialog}
        handleClose={() => setOpenDialog(!openDialog)}
        problemGroupId={groupProblemId}
      />
    </Layout>
  );
};

export default Page;