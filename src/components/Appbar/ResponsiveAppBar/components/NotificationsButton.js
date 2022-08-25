import { IconButton, Tooltip } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react';
import { connect } from 'react-redux'

import {
  getUserNotificationsAction,
} from '../../../../redux/slices/account';
import Notifications from '../../../Dialog/Notifications';
import useWidth from '../../../../utils/UseWidth';

const useStyles = makeStyles(() => ({
  logo: ({ width }) => ({
    height: width == 'xs' ? 50 : 60,
  }),
  logoButton: ({ width }) => ({
    padding: width == 'xs' ? 5 : 10,
  }),
}));

const Index = ({ getUserNotifications }) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const width = useWidth();
  const classes = useStyles({ width });

  return <>
    <Tooltip arrow title='اعلان‌ها'>
      <IconButton
        className={classes.logoButton}
        onClick={() => {
          setOpenDialog(!openDialog);
          getUserNotifications();
        }}
        size="large">
        <NotificationsIcon />
      </IconButton>
    </Tooltip>
    <Notifications
      open={openDialog}
      handleClose={() => setOpenDialog(!openDialog)}
    />
  </>;
}

export default connect(null, { getUserNotifications: getUserNotificationsAction })(Index);