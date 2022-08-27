import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import DraggableChatRoom from '../components/organism/chatRoom/DraggableChatRoom';
import {
  changeOpenChatRoomAction,
  getTeamAction,
  getUserNotificationsAction,
} from '../redux/slices/account';
import Layout from '../components/organism/Layout';
import ProblemDialog from '../components/organism/ProblemDialog'

import Doors from './rooms/Doors';
import Japan from './rooms/Japan';
import Algorithm from './rooms/Alogorithm';
import Data from './rooms/Data';
import Hoosh from './rooms/Hoosh';
import SourceCoding from './rooms/SourceCoding';
import Finio1 from './rooms/Finio1';
import Finio2 from './rooms/Finio2';

const rooms = {
  'doors': <Doors />,
  'japan': <Japan />,
  'algorithm': <Algorithm />,
  'data': <Data />,
  'hoosh': <Hoosh />,
  'source': <SourceCoding />,
  'finio1': <Finio1 />,
  'finio2': <Finio2 />,
}

const Room = ({
  team,

  openChatRoom,
  getUserNotifications,
  changeOpenChatRoom,
  getTeam,
}) => {
  const { roomName } = useParams();

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
      {team?.chat_room &&
        <DraggableChatRoom
          open={openChatRoom}
          handleClose={changeOpenChatRoom}
          chatRoom={team.chat_room} />
      }
      <ProblemDialog />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  team: state.account.team,
  openChatRoom: state.account.openChatRoom,
})

export default connect(mapStateToProps, {
  changeOpenChatRoom: changeOpenChatRoomAction,
  getTeam: getTeamAction,
  getUserNotifications: getUserNotificationsAction,
})(Room);
