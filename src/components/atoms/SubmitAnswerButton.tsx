import {
  Button,
  IconButton,
} from '@mui/material';
import {
  CloudUpload as CloudUploadIcon,
} from '@mui/icons-material';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  submitAnswerAction,
} from '../../redux/slices/problem';
import { baseURL } from '../../configs/axios'

function submitAnswerButton({
  isFetching,
  answer,
  submitAnswer,
  submitId,
  problemId,
}) {
  const [answerFile, setAnswerFile] = useState(answer);

  const changeFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      if (file.size <= 8e6) {
        submitAnswer({
          submitId,
          problemId,
          answerFile: file,
        }).then((response) => {
          if (response.type?.endsWith('fulfilled')) {
            setAnswerFile({
              link: response.payload?.response?.answer_file,
              name: file.name,
            });
          } else {
            e.target.value = null;
          }
        })
      } else {
        e.target.value = null;
        e.target.setCustomValidity('Maximum upload file size is 8 MB.');
        e.target.reportValidity();
      }
    }
  };

  const clearFile = (e) => {
    e.preventDefault();
    setAnswerFile(null);
  }

  return (
    <>
      {
        answerFile &&
        <Button
          size="small"
          variant='outlined'
          sx={{
            whiteSpace: 'nowrap',
          }}
          endIcon={
            <IconButton size='small' onClick={clearFile}>
              <ClearIcon sx={{ fontSize: 14 }} />
            </IconButton>
          }
          href={baseURL + answerFile?.link}
          component="a"
          target="_blank">
          {answerFile?.name ? answerFile?.name.substring(0, 30) : 'پاسخ ارسال شده'}
        </Button>
      }
      <Button
        component="label"
        htmlFor={'submit-answer'}
        disabled={isFetching}
        variant="contained"
        color="primary"
        size="small"
        startIcon={<CloudUploadIcon />}
        sx={{ whiteSpace: 'nowrap' }}>
        {'ارسال پاسخ'}
      </Button>
      <input
        accept="application/pdf,image/*"
        style={{ display: 'none' }}
        id={'submit-answer'}
        type="file"
        onChange={changeFile}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  isFetching: state.problem.isFetching,
})

export default connect(mapStateToProps, {
  submitAnswer: submitAnswerAction,
})(submitAnswerButton);