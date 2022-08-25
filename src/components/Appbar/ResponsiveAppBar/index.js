import {
  AppBar,
  Container,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import clsx from 'clsx';

import HideOnScroll from './components/HideOnScroll';
import modes from './modes';
import useWidth from '../../../utils/UseWidth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: '0.2s',
  },

  list: {
    width: 250,
  },
  hideBack: {
    background: 'transparent',
    boxShadow: 'none',
  },
}));



function ResponsiveAppBar({
  mode = 'GAME_ENVIRONMENT',
  showBackOnScroll = false,
  hideOnScroll = false,
}) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 30 });
  const width = useWidth();

  const {
    desktopLeftItems,
    desktopRightItems,
    mobileLeftItems,
    mobileRightItems,
    mobileMenuListItems,
  } = modes[mode]();

  const rightItems = width === 'xs' ? mobileRightItems : desktopRightItems;
  const leftItems = width === 'xs' ? mobileLeftItems : desktopLeftItems;

  return (
    <>
      <HideOnScroll disable={!hideOnScroll}>
        <div className={classes.root}>
          <AppBar className={`${classes.appBar} ${classes.hideBack}`} position="fixed">
            <Toolbar>
              {rightItems.map((item, index) => { return (<>{item}</>) })}
              <div className={classes.title} />
              {leftItems.map((item, index) => { return (<>{item}</>) })}
            </Toolbar>
          </AppBar>
        </div>
      </HideOnScroll>
      {mobileMenuListItems.length > 0 && (
        <Hidden smUp>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}>
            <div className={classes.list}>
              <List>
                {mobileMenuListItems.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </List>
            </div>
          </Drawer>
        </Hidden>
      )}
    </>
  );
}

export default ResponsiveAppBar;
