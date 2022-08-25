import { Button, Icon, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { connect } from 'react-redux';

import { logoutAction } from '../../../../redux/slices/account';

const useStyles = makeStyles(() => ({
  iconImage: {
    maxHeight: '20px',
    width: '100%',
  },
}));

function LogoutButton({ logout }) {
  const classes = useStyles();
  return (
    <Button
      color='primary'
      variant="contained"
      onClick={logout}>
      {'خروج از بازی'}
    </Button>
  );
}

export default connect(null, { logout: logoutAction })(LogoutButton);
