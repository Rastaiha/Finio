import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import AppBar from '../components/Appbar/ResponsiveAppBar';
import {
  getPlayerAction,
  getUserNotificationsAction,
} from '../redux/slices/account';

const Layout = ({
  getPlayer,
  getUserNotifications,
  ...props
}) => {

  useEffect(() => {
    getPlayer();
    getUserNotifications();
  }, []);

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
  getPlayer: getPlayerAction,
  getUserNotifications: getUserNotificationsAction,
})(Layout);