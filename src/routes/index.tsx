import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login'
import Egypt from '../containers/Rooms/Egypt';
import Exchange from '../containers/Rooms/Exchange';
import Greece from '../containers/Rooms/Greece';
import Iran from '../containers/Rooms/Iran';
import Japan from '../containers/Rooms/Japan';

const Root = () => {
  return (
    <Routes>
      <Route path="/loading/"></Route>
      <Route path="/" element={<Login />} />

      <Route path="/" element={<PrivateRoute />}>
        <Route path="/japan/" element={<Japan />} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default Root;
