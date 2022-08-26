import { createSlice } from '@reduxjs/toolkit';

import { Apis } from '../apis';
import { createAsyncThunkApi } from '../apis/cerateApiAsyncThunk';
import {
  getProblemFromGroupUrl,
  hasPlayerGotProblemUrl,
  submitProblemUrl,
} from '../constants/urls';

export const hasPlayerGotProblemAction = createAsyncThunkApi(
  'problem/hasPlayerGotProblemAction',
  Apis.POST,
  hasPlayerGotProblemUrl,
);

export const getProblemFromGroupAction = createAsyncThunkApi(
  'problem/getProblemFromGroupUrl',
  Apis.POST,
  getProblemFromGroupUrl,
  {
    defaultNotification: {
      error: 'مشکلی در دریافت مسئله وجود داشت.',
    },
  }
);

export const submitAnswerAction = createAsyncThunkApi(
  'problem/submitAnswerAction',
  Apis.POST_FORM_DATA,
  submitProblemUrl,
  {
    defaultNotification: {
      success: 'پاسخ شما با موفقیت ثبت شد!',
      error: 'مشکلی در ارسال پاسخ وجود داشت.',
    },
  }
);

const initialState = {
  openProblemDialog: false,
  problem: null,
  problemGroupId: null,
};

const isFetching = (state) => {
  state.isFetching = true;
};

const isNotFetching = (state) => {
  state.isFetching = false;
};

const accountSlice = createSlice({
  name: 'problem',
  initialState,
  reducers: {
    setProblemDialog: (state, action) => {
      state.problemGroupId = action.payload.problemGroupId;
      state.openProblemDialog = !state.openProblemDialog;
    },
  },
  extraReducers: {
    [hasPlayerGotProblemAction.pending.toString()]: isFetching,
    [hasPlayerGotProblemAction.fulfilled.toString()]: isNotFetching,
    [hasPlayerGotProblemAction.rejected.toString()]: isNotFetching,


    [getProblemFromGroupAction.pending.toString()]: isFetching,
    [getProblemFromGroupAction.fulfilled.toString()]: (state, { payload: { response } }) => {
      console.log(response)
      state.problem = response.problem;
      state.answer = response.answer;
      state.submit = response.submit;
      state.isFetching = false;
    },
    [getProblemFromGroupAction.rejected.toString()]: isNotFetching,


    [submitAnswerAction.pending.toString()]: isFetching,
    [submitAnswerAction.fulfilled.toString()]: isNotFetching,
    [submitAnswerAction.rejected.toString()]: isNotFetching,

  },
});

export const {
  setProblemDialog: setProblemDialogAction,
} = accountSlice.actions;

export const { reducer: problemReducer } = accountSlice;
