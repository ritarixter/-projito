import { FC, useEffect } from 'react';
import styles from './Burger.module.css';
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks/reduxHooks";
import { closeBurgerMenu, openBurgerMenu } from "../../services/slices/burgerMenu";

const Burger: FC = () => {
  const dispatch = useAppDispatch();
  const isBurgerMenuOpened = useAppSelector(store => store.burger.isBurgerMenuOpened)
  const { pathname } = useLocation();

  const toggleBurgerMenu = () => {
    if (isBurgerMenuOpened) {
      document.body.classList.remove(styles.bodyFixed);
      dispatch(closeBurgerMenu())
    } else if (!isBurgerMenuOpened) {
      document.body.classList.add(styles.bodyFixed);
      dispatch(openBurgerMenu())
    }
  };

  useEffect(() => {
    const closeBurgerMenuWithResize = () => document.body.offsetWidth >= 620 && toggleBurgerMenu();

    isBurgerMenuOpened && window.addEventListener("resize", closeBurgerMenuWithResize);

    return () => {
      window.removeEventListener("resize", closeBurgerMenuWithResize);
    }
  }, [isBurgerMenuOpened]);

  useEffect(() => {
    document.body.classList.remove(styles.bodyFixed);
    dispatch(closeBurgerMenu())
  }, [pathname])

  return (
    <button className={styles.burgerContainer} onClick={toggleBurgerMenu}>
      <span
        className={`${styles.burger} ${
          isBurgerMenuOpened ? styles.burgerOpened : ""
        }`}
      ></span>
    </button>
  );
}

export default Burger;