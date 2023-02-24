import { FC } from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import { NavLink, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/reduxHooks";
import Burger from "../Burger/Burger";

const Header: FC = () => {
  const isBurgerMenuOpened = useAppSelector(store => store.burger.isBurgerMenuOpened);
  const { pathname } = useLocation();

  return (
    <header className={
      `${styles.header} ${pathname === '/' ? styles.headerMainPage : ''} ${isBurgerMenuOpened ? styles.headerBurgerOpened : ''}
    `}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <Logo />
          <div className={styles.burgerContainer}>
            <Burger />
          </div>
        </div>
        <nav
          className={`${styles.navigation} ${
            isBurgerMenuOpened ? styles.navigationOpened : ""
          }`}
        >
          <ul className={styles.navigationList}>
            <li>
              <a className={styles.navigationLink} href="https://prozhito.org/page/archive" target="_blank">Архив</a>
            </li>
            <li>
              <a className={styles.navigationLink} href="https://prozhito.org/persons" target="_blank">Корпус</a>
            </li>
            <li className={styles.aboutProjectContainer}>
              <NavLink
                className={`${styles.navigationLink} ${pathname === '/' ? styles.navigationLinkActive : ''}`} // activeClassName не работает???
                to="/"
              >О проекте</NavLink>
              <ul className={styles.aboutProjectList}>
                <li>
                  <a className={styles.aboutProjectLink} href="#">О прожито</a>
                </li>
                <li>
                  <a className={styles.aboutProjectLink} href="#">Как работать?</a>
                </li>
                <li>
                  <a className={styles.aboutProjectLink} href="#">Медиа</a>
                </li>
                <li>
                  <a className={styles.aboutProjectLink} href="#">Новости</a>
                </li>
                <li>
                  <a className={styles.aboutProjectLink} href="#">Спецпроекты</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
