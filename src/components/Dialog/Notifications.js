import {
  Dialog,
  DialogContent,
  DialogTitle,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  ListItemText,
  ListItem,
  Slide,
  Typography,
  List,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { connect } from 'react-redux';
import {
  getUserNotificationsAction,
  markNotificationAsSeenAction,
} from '../../redux/slices/account'

function Index({
  handleClose,
  markNotificationAsSeen,
  open,
  notifications,
}) {
  return (
    <Dialog maxWidth="sm" TransitionComponent={Slide} open={open} onClose={handleClose} >
      <DialogTitle>
        <Typography variant='h2' gutterBottom>
          {'اعلان‌ها'}
        </Typography>
      </DialogTitle>
      <List>
        {notifications?.map((notification) => (
          <>
            <ListItem alignItems="flex-start" key={notification.id}>
              <ListItemText
                primary={notification.title}
                secondary={notification.body} />
              <ListItemSecondaryAction>
                {/* <IconButton
                  onClick={() => markNotificationAsSeen({ notification: notification.id })}
                  size="large">
                  <DeleteIcon />
                </IconButton> */}
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </>
        ))}
        {notifications?.length == 0 &&
          <DialogContent>
            <Typography variant='h5' align='center'>
              {'شما اعلان نخوانده‌ای ندارید!'}
            </Typography>
          </DialogContent>
        }
      </List>
    </Dialog >
  );
}

const mapStateToProps = (state, props) => ({
  notifications: state.account.notifications,
})

export default connect(
  mapStateToProps,
  {
    getUserNotifications: getUserNotificationsAction,
    markNotificationAsSeen: markNotificationAsSeenAction,
  }
)(Index);