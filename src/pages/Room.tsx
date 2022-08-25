import React, { FC } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import DraggableChatRoom from '../components/ChatRoom/DraggableChatRoom';
import { changeOpenChatRoomAction } from '../redux/slices/account';
import Layout from '../containers/Layout';

import Japan from './Rooms/Japan';

const rooms = {
  'japan': <Japan />
}

const Room = ({
  openChatRoom,
  changeOpenChatRoom,
  chatRoom,
}) => {
  const { roomName } = useParams();

  console.log(roomName)

  chatRoom = 'https://gharar.ir/r/a2811286';

  if (!roomName) {
    return <></>
  }

  return (
    <Layout>
      {rooms[roomName]}
      <DraggableChatRoom
        open={openChatRoom}
        handleClose={changeOpenChatRoom}
        chatRoom={chatRoom} />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  chatRoom: state.account.chatRoom,
  openChatRoom: state.account.openChatRoom,
})

export default connect(mapStateToProps, {
  changeOpenChatRoom: changeOpenChatRoomAction,
})(Room);
