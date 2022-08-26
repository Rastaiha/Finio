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

const rooms = {
  'japan': <Japan />,
  'algorithm': <Algorithm />,
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
