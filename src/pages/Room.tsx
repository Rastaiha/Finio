import React, { FC } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import DraggableChatRoom from '../components/ChatRoom/DraggableChatRoom';
import { changeOpenChatRoomAction } from '../redux/slices/account';
import Layout from '../containers/Layout';

import Japan from './Rooms/Japan';
import Algorithm from './Rooms/Alogorithm';
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
