import {
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  Grow,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';
import {
  hasPlayerGotProblemAction,
  getProblemFromGroupAction,
} from '../../redux/slices/problem'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function GetProblemDialog({
  handleClose,
  getProblemFromGroup,
  hasPlayerGotProblem,

  text,
  problemGroupId,
  image: inputImage,
  open,
}) {
  const navigate = useNavigate()
  const [image, setImage] = React.useState(inputImage || '/characters/gooooorb.png');
  const [showDialog, setShowDialog] = React.useState(false);

  React.useEffect(() => {
    if (problemGroupId) {
      hasPlayerGotProblem({ problemGroupId }).then((action) => {
        if (action.type.includes('fulfilled')) {
          getProblemFromGroup({ problemGroupId }).then((action) => {
            if (action.type.includes('fulfilled')) {
              navigate(`/problem/${action?.meta?.arg?.problemGroupId}/${action.payload.response.submit.id}/${action.payload.response.problem.id}/`)
            }
            handleClose();
          });
        } else {
          setShowDialog(true);
        }
      })
    }
  }, [problemGroupId])

  const doRequestProblem = () => {
    getProblemFromGroup({ problemGroupId }).then((action) => {
      if (action.type.includes('fulfilled')) {
        navigate(`/problem/${action?.meta?.arg?.problemGroupId}/${action.payload.response.submit.id}/${action.payload.response.problem.id}/`)
      }
      handleClose();
    });
  }

  if (!showDialog) {
    return (<></>)
  }

  return (
    <Dialog onClose={handleClose} maxWidth="xs" TransitionComponent={Grow} open={open} PaperComponent='false'>
      <DialogTitle>
        <Grid
          container
          justifyContent='center'
          spacing={2}>
          <img width='100%' style={{ objectFit: 'contain' }} alt='' src={process.env.PUBLIC_URL + image} />
        </Grid>
      </DialogTitle>
      <DialogActions>
        <Grid container component={Paper} direction='column' spacing={2} justifyContent='center'>
          <Grid item>
            <Typography>
              {text || 'آیا مطمئنید؟ برای گرفتن سوال ۱۰۰۰ سکه از شما کسر می‌شود. توجه کنید که جادوگر و گربه‌اش با کسی شوخی ندارند و پس از پرداخت سکه، دیگر امکان پس‌گرفتن آن را ندارید!'}
            </Typography>
          </Grid>
          <Grid item container justifyContent='center' alignItems='center'>
            <ButtonGroup fullWidth variant='contained' color='primary'>
              <Button
                onClick={doRequestProblem}>
                {'تایید'}
              </Button>
              <Button
                onClick={() => handleClose()}>
                {'لغو'}
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog >
  );
}


export default connect(
  null,
  {
    hasPlayerGotProblem: hasPlayerGotProblemAction,
    getProblemFromGroup: getProblemFromGroupAction,
  }
)(GetProblemDialog);