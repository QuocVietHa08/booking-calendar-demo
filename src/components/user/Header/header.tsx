import React from 'react';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerBanner}>Logo</div> 
      <div className={styles.headerMenu}>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Profile</li>
          <li>Project</li>
          <li className={styles.setting}>Setting</li>
          <li>|</li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default Header