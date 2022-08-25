import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login'
import Room from '../pages/Room';

const Root = () => {
  return (
    <Routes>
      <Route path="/loading/"></Route>
      <Route path="/" element={<Login />} />

      <Route path="/" element={<PrivateRoute />}>
        <Route path="/room/:roomName/" element={<Room />} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default Root;
