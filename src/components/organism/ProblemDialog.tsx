import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grow,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TinyPreview from '../tiny_editor/react_tiny/Preview';
import {
  getProblemFromGroupAction,
  setProblemDialogAction,
  submitAnswerAction,
} from '../../redux/slices/problem';
import SubmitAnswerButton from '../atoms/SubmitAnswerButton';

function ProblemDialog({
  openProblemDialog,
  problem,
  message,
  problemGroupId,

  submit,
  setProblemDialog,
  getProblemFromGroup,
}) {

  useEffect(() => {
    if (problemGroupId) {
      getProblemFromGroup({ problemGroupId });
    }
  }, [problemGroupId])

  return (
    <Dialog maxWidth="xs" TransitionComponent={Grow} open={openProblemDialog} onClose={setProblemDialog}>
      <DialogTitle>
        {problem?.title}
      </DialogTitle>
      <DialogContent>
        {message ?
          <Typography variant='h5'>
            {message}
          </Typography>
          :
          <TinyPreview
            content={problem?.text}
            frameProps={{
              frameBorder: '0',
              scrolling: 'no',
              width: '100%',
            }}
          />
        }
      </DialogContent>
      <DialogActions>
        {message ?
          <Button variant='outlined' onClick={setProblemDialog}>
            {'متوجه شدم'}
          </Button>
          : <SubmitAnswerButton handleClose={setProblemDialog} submitId={submit?.id} problemId={problem?.id} />
        }
      </DialogActions>
    </Dialog >
  );
}

const mapStateToProps = (state) => ({
  openProblemDialog: state.problem.openProblemDialog,
  problemGroupId: state.problem.problemGroupId,
  problem: state.problem.problem,
  answer: state.problem.answer,
  submit: state.problem.submit,
  message: state.problem.message,
})

export default connect(mapStateToProps, {
  getProblemFromGroup: getProblemFromGroupAction,
  setProblemDialog: setProblemDialogAction,
  submitAnswer: submitAnswerAction,
})(ProblemDialog);