import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <ul className={styles.ul}>
          <li>Home</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
