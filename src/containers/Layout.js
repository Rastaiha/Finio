import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AppBar from '../components/Appbar/ResponsiveAppBar';

const Layout = ({
  getPlayer,
  getUserNotifications,
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

export default connect(null, {
  getPlayer: getTeamAction,
  getUserNotifications: getUserNotificationsAction,
})(Layout);