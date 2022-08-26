import './configs/styles/App.css';

import React from 'react';
import { CssBaseline, LinearProgress } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { CacheProvider } from "@emotion/react";
import { connect } from 'react-redux';
import Notifier from './components/Notifications/Notifications';
import createEmotionCache from './configs/createEmotionCache'
import selectTheme from './configs/themes';
import Root from './routes';


const App = ({ loading }) => {

  const dir = 'rtl'
  document.body.dir = dir;

  const Loading = () => {
    if (loading) {
      return (
        <div style={{ width: '100%', position: 'fixed', top: '0px', zIndex: '99999' }}>
          <LinearProgress />
        </div>
      )
    } else {
      return (<></>)
    }
  }

  return (
    <CacheProvider value={createEmotionCache(dir)}>
      <ThemeProvider theme={selectTheme(dir)}>
        <SnackbarProvider>
          <Loading />
          <Notifier />
          <CssBaseline />
          <Root />
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

const mapStateToProps = (state) => ({
  // loading: state.account.isFetching || state.events.isFetching || state.currentState.isFetching,
});

export default connect(mapStateToProps, null)(App);
