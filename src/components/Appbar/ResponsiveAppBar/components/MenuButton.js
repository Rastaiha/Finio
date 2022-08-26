import { IconButton } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { connect } from 'react-redux'

import {
  getTeamAction,
} from '../../../../redux/slices/account'
import useWidth from '../../../../utils/UseWidth';
import GameMenu from '../../../Dialog/GameMenu';

const useStyles = makeStyles(() => ({
  logo: ({ width }) => ({
    height: width == 'xs' ? 50 : 60,
  }),
  logoButton: ({ width }) => ({
    padding: width == 'xs' ? 5 : 10,
  }),
}));

const Index = ({ getPlayer }) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const width = useWidth();
  const classes = useStyles({ width });

  return <>
    <IconButton
      className={classes.logoButton}
      onClick={() => {
        setOpenDialog(!openDialog);
        getPlayer();
      }}
      size='small'>
      <img
        src={process.env.PUBLIC_URL + '/logo.png'}
        alt="logo"
        className={classes.logo}
      />
    </IconButton>
    <GameMenu
      open={openDialog}
      handleClose={() => setOpenDialog(!openDialog)}
    />
  </>;
}

export default connect(null, { getPlayer: getTeamAction })(Index);