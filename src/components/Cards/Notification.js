import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { useState } from 'react';
import { connect } from 'react-redux'

import {
  markNotificationAsSeenAction,
} from '../../redux/slices/account'

const useStyles = makeStyles({

});

const Index = ({
  markNotificationAsSeen,

  notification,
}) => {
  const classes = useStyles();

  return (
    <>
      <Card>
        <CardActionArea
          disabled={notification.has_seen}
          onClick={() => {
          }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {notification?.title}
            </Typography>
            <Typography variant="subtitle">
              {notification?.body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

const mapStateToProps = (state) => ({

})

export default connect(
  mapStateToProps,
  {
    markNotificationAsSeen: markNotificationAsSeenAction
  }
)(Index);
