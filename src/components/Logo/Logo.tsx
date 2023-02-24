import { FC } from 'react';
import styles from './Logo.module.css';
import { Link } from "react-router-dom";

const Logo: FC = () => {

  return (
    <span className={styles.logo}>
      <Link className={styles.mainLogo} to='/'></Link>
      <Link className={styles.universityLogo} to='/'></Link>
    </span>
  );
}

export default Logo;