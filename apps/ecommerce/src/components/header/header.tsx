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
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['left']}>
          <img src={MenuIcon} alt="Menu icon" />
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
    </>
  );
}

export default Header;
