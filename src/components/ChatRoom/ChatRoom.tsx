import { Box, IconButton, Stack, Tooltip } from '@mui/material';
import {
  Cancel as CancelIcon,
} from '@mui/icons-material';
import React, { FC, useRef } from 'react';
import useWidth from '../../utils/UseWidth';

type ChatRoomPropsType = {
  handleClose: any;
  chatRoom: string;
}

const ChatRoom: FC<ChatRoomPropsType> = ({
  handleClose,
  chatRoom,
}) => {
  const width = useWidth();
  const iframeRef = useRef(null);
  const jitsiRef = useRef(null);

  return (
    <>
      <Stack
        direction='row'
        justifyContent='flex-end'
        sx={{
          background: '#c4c4c4',
          cursor: width === 'xs' ? 'inherit' : 'move',
          paddingX: 1,
          borderTopLeftRadius: width === 'xs' ? 0 : 6,
          borderTopRightRadius: width === 'xs' ? 0 : 6,
          height: 40,
        }}>
        <Tooltip title='بستن' arrow>
          <IconButton size='small' onClick={handleClose}>
            <CancelIcon sx={{ color: 'white' }} />
          </IconButton>
        </Tooltip>
      </Stack>
      <Box
        sx={{
          width: '100%',
          height: width === 'xs' ? '100%' : 350 - 40,
        }}>
        <iframe
          ref={iframeRef}
          src={chatRoom}
          allow="camera *; microphone *; fullscreen *; display-capture *;"
          allowFullScreen
          height='100%'
          width='100%'
          style={{ border: 'none' }} />
      </Box>
    </>
  );
}

export default ChatRoom;