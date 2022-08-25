import {
  Button,
  ButtonGroup,
  Dialog,
  TextField,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  addNotificationAction,
} from '../../redux/slices/notifications'

const useStyles = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(2),
  }
}));


function Index({
  open,
  handleClose,
  callBackFunction,
  addNotification,
}) {
  const navigate = useNavigate();
  const classes = useStyles();
  const [answer, setAnswer] = React.useState(0);

  return (
    <Dialog maxWidth="xs" open={open} onClose={handleClose}  >
      <DialogContent>
        <Grid item>
          <Typography variant='h5' align='center'>
            {'چیزی به دست آوردی؟'}
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            onChange={(e) => {
              setAnswer(e.target.value)
            }} />
        </Grid>
      </DialogContent>
      <DialogActions>
        <ButtonGroup variant='contained' color='primary' fullWidth>
          <Button onClick={() => {
            if (answer == '7655') {
              navigate('/baygani/start/')
            } else {
              addNotification({
                message: 'ای بابا!',
                type: 'error',
              });
            }
            handleClose();
          }} >
            {'یا اکثر امام‌زاده‌ها'}
          </Button>
        </ButtonGroup>
      </DialogActions>
    </Dialog>
  );
}


export default connect(
  null,
  {
    addNotification: addNotificationAction,
  }
)(Index);