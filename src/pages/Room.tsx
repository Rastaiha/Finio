import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import DraggableChatRoom from '../components/organism/ChatRoom/DraggableChatRoom';
import {
  changeOpenChatRoomAction,
  getTeamAction,
  getUserNotificationsAction,
} from '../redux/slices/account';
import Layout from '../containers/Layout';
import ProblemDialog from '../components/organism/ProblemDialog'

import Doors from './Rooms/Doors';
import Japan from './Rooms/Japan';
import Algorithm from './Rooms/Alogorithm';
import Data from './Rooms/Data';
import Hoosh from './Rooms/Hoosh';
import Source from './Rooms/Source';
import Finio1 from './Rooms/Finio1';
import Finio2 from './Rooms/Finio2';

const rooms = {
  'doors': <Doors />,
  'japan': <Japan />,
  'algorithm': <Algorithm />,
  'data': <Data />,
  'hoosh': <Hoosh />,
  'source': <Source />,
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
