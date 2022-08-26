import {
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grow,
  IconButton,
} from '@mui/material';
import {
  CloudUpload as CloudUploadIcon,
} from '@mui/icons-material';
import ClearIcon from '@mui/icons-material/Clear';
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
  answer,
  submit,
  problemGroupId,

  setProblemDialog,
  getProblemFromGroup,
}) {
  const [answerFile, setAnswerFile] = useState(null);

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
        {problem?.title}
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
        <SubmitAnswerButton submitId={submit?.id} problemId={problem?.id} />
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
})

export default connect(mapStateToProps, {
  getProblemFromGroup: getProblemFromGroupAction,
  setProblemDialog: setProblemDialogAction,
  submitAnswer: submitAnswerAction,
})(ProblemDialog);