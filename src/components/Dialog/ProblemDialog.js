import {
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grow,
} from '@mui/material';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TinyPreview from '../tiny_editor/react_tiny/Preview';
import {
  getProblemFromGroupAction,
  setProblemDialogAction,
  submitAnswerAction,
} from '../../redux/slices/problem';

function ProblemDialog({
  openProblemDialog,
  problem,
  answer,
  problemGroupId,

  setProblemDialog,
  getProblemFromGroup,
}) {

  useEffect(() => {
    if (problemGroupId) {
      getProblemFromGroup({ problemGroupId });
    }
  }, [problemGroupId])

  console.log(problem);
  console.log(answer);

  return (
    <Dialog maxWidth="xs" TransitionComponent={Grow} open={openProblemDialog} onClose={setProblemDialog}>
      <DialogTitle>
        {'مسئله فلان'}
      </DialogTitle>
      <DialogContent>
        <TinyPreview
          content={problem?.text}
          frameProps={{
            frameBorder: '0',
            scrolling: 'no',
            width: '100%',
          }}
        />
      </DialogContent>
      <DialogActions>
        <ButtonGroup fullWidth variant='contained' color='primary'>
          <Button
            onClick={() => { }}>
            {'ارسال'}
          </Button>
          <Button
            onClick={() => { }}>
            {'لغو'}
          </Button>
        </ButtonGroup>
      </DialogActions>
    </Dialog >
  );
}

const mapStateToProps = (state) => ({
  openProblemDialog: state.problem.openProblemDialog,
  problemGroupId: state.problem.problemGroupId,
  problem: state.problem.problem,
  answer: state.problem.answer,
})

export default connect(mapStateToProps, {
  getProblemFromGroup: getProblemFromGroupAction,
  setProblemDialog: setProblemDialogAction,
  submitAnswer: submitAnswerAction,
})(ProblemDialog);