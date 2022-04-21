import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import React, { useState } from 'react';
import CartIcon from '../../assets/icon-cart.svg';
import MenuIcon from '../../assets/icon-menu.svg';
import CloseIcon from '../../assets/icon-close.svg';
import UserAvatar from '../../assets/image-avatar.png';
import BrandLogo from '../../assets/logo.svg';
import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  const list = () => (
    <Box
      className={styles['drawer-container']}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Collections', 'Men', 'Women', 'About', 'Contact'].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['left']}>
          <Button onClick={toggleDrawer(true)}>
            <img src={MenuIcon} alt="Menu icon" />
          </Button>
          <img src={BrandLogo} alt="Sneakers logo" />
        </div>
        <div className={styles['right']}>
          <img src={CartIcon} alt="Cart icon" />
          <img
            src={UserAvatar}
            alt="User avatar"
            className={styles['avatar']}
          />
        </div>
      </div>

      <Drawer anchor={'left'} open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <img src={CloseIcon} alt="Close icon" />
          </IconButton>
        </DrawerHeader>
        {list()}
      </Drawer>
    </>
  );
}

export default Header;
