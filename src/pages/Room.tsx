import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import DraggableChatRoom from '../components/ChatRoom/DraggableChatRoom';
import {
  changeOpenChatRoomAction,
  getTeamAction,
  getUserNotificationsAction,
} from '../redux/slices/account';
import Layout from '../containers/Layout';
import ProblemDialog from '../components/Dialog/ProblemDialog'

import Japan from './Rooms/Japan';
import Algorithm from './Rooms/Alogorithm';
<<<<<<< HEAD
import Data from './Rooms/Data';
import Hoosh from './Rooms/Hoosh';
import Source from './Rooms/Source';
import Finio1 from './Rooms/Finio1';
import Finio2 from './Rooms/Finio2';

const rooms = {
  'japan': <Japan />,
  'algorithm': <Algorithm/>,
  'data': <Data/>,
  'hoosh': <Hoosh/>,
  'source': <Source/>,
  'finio1': <Finio1/>,
  'finio2': <Finio2/>,
=======

const rooms = {
  'japan': <Japan />,
  'algorithm': <Algorithm />,
>>>>>>> 84f6f173e8a6e9904f7031f685873df936417038
}

const Room = ({
  openChatRoom,
  chatRoom,

  getUserNotifications,
  changeOpenChatRoom,
  getTeam,
}) => {
  const { roomName } = useParams();

  console.log(roomName)

  // chatRoom = 'https://gharar.ir/r/a2811286';

  useEffect(() => {
    getTeam({});
    getUserNotifications({});
  }, [])


  if (!roomName) {
    return <></>
  }

  return (
    <Layout>
      {rooms[roomName]}
      {chatRoom &&
        <DraggableChatRoom
          open={openChatRoom}
          handleClose={changeOpenChatRoom}
          chatRoom={chatRoom} />
      }
      <ProblemDialog />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  chatRoom: state.account.chatRoom,
  openChatRoom: state.account.openChatRoom,
})

export default connect(mapStateToProps, {
  changeOpenChatRoom: changeOpenChatRoomAction,
  getTeam: getTeamAction,
  getUserNotifications: getUserNotificationsAction,
})(Room);
