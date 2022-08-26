import {
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  Grid,
  Hidden,
  Paper,
  Slide,
  Stack,
  Typography,
  Zoom,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { connect } from 'react-redux';

import {
  getTeamAction
} from '../../redux/slices/account';
import { toPersianNumber } from '../../utils/translateNumber'

const useStyles = makeStyles((theme) => ({
  description: {
    padding: '10px',
    align: 'left',
    textAlign: 'justify',
  },
  paper: {
    padding: theme.spacing(2),
    width: '100%',
  }
}));

function GameMenu({
  handleClose,

  open,
  team,
}) {


  return (
    <Dialog maxWidth="sm" TransitionComponent={Slide} open={open} onClose={handleClose} >
      <DialogTitle>
        <Typography align='center' variant='h2'>
          {`تیم ${team?.name}`}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={1} justifyContent='center'>
          <Grid item container xs={12} sm={6} alignItems='center' justifyContent='center'>
            <Stack spacing={2}>
              <Typography variant='h3' gutterBottom>
                {'دارایی‌ها:'}
              </Typography>
              <Stack direction='row' spacing={1}>
                <img width='40px' alt='' src={process.env.PUBLIC_URL + '/items/coin.png'} />
                <Typography>
                  {`سکه: ${toPersianNumber(team?.coin || 0)}`}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog >
  );
}

const mapStateToProps = (state, props) => ({
  team: state.account.team,
})

export default connect(
  mapStateToProps,
  {
    getPlayer: getTeamAction,
  }
)(GameMenu);