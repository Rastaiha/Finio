import { Container } from '@mui/material';
import React from 'react';
import AppBar from '../Appbar/ResponsiveAppBar';

const Layout = ({
  ...props
}) => {
  return (
    <>
      <AppBar mode="GAME_ENVIRONMENT" position="fixed" />
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginRight: 'auto !important',
          marginLeft: 'auto !important',
        }}>{props.children}</Container>
    </>
  );
};

export default Layout;