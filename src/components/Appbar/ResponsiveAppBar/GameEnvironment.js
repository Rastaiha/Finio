import React from 'react';
import { useTranslate } from 'react-redux-multilingual/lib/context';

import JitsiButton from './components/JitsiButton';
import LogoButton from './components/LogoButton';
import MenuButton from './components/MenuButton';
import NotificationsButton from './components/NotificationsButton';
import LogoutButton from './components/LogoutButton';

const ArticleAppBarItems = () => {
  const t = useTranslate();
  const logoButton = <LogoButton />;
  const notificationsButton = <NotificationsButton />;
  const menuButton = <MenuButton />;
  const jitsiButton = <JitsiButton />
  const logoutButton = <LogoutButton />

  return {
    desktopLeftItems: [logoutButton],
    desktopRightItems: [menuButton, jitsiButton, notificationsButton],
    mobileLeftItems: [logoutButton],
    mobileRightItems: [menuButton, jitsiButton, notificationsButton],
    mobileMenuListItems: [],
  };
};

export default ArticleAppBarItems;