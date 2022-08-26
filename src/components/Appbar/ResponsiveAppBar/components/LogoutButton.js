import { Button, Icon, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { logoutAction } from '../../../../redux/slices/account';

function LogoutButton({ logout }) {
  const navigate = useNavigate();
  const { roomName } = useParams();

  return (
    <Button
      color='primary'
      variant="contained"
      onClick={() => {
        if (roomName == 'doors') {
          logout();
        } else {
          navigate(-1);
        }
      }}>
      {roomName == 'doors' ? 'خروح از بازی' : 'بازگشت به عقب'}
    </Button >
  );
}

export default connect(null, { logout: logoutAction })(LogoutButton);
