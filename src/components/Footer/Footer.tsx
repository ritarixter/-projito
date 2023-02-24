import React from "react";
import styles from "./footer.module.css";
import telegramImg from "../../images/telegram.svg";
import vkImg from "../../images/vk.svg";
import Logo from "../Logo/Logo";

export function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footer__linksSection}>
        <ul className={styles.footer__links}>
          <li className={styles.footer__linksItem}>
            <a href="#" className={styles.footer__link}>
              О команде
            </a>
          </li>
          <li className={styles.footer__linksItem}>
            <a href="#" className={styles.footer__link}>
              Благодарности
            </a>
          </li>
          <li className={styles.footer__linksItem}>
            <a href="#" className={styles.footer__link}>
              Партнёры
            </a>
          </li>
          <li className={styles.footer__linksItem}>
            <a href="#" className={styles.footer__link}>
              FAQ
            </a>
          </li>
          <li className={styles.footer__linksItem}>
            <a href="#" className={styles.footer__link}>
              Инструкции
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.footer__logoSection}>
        <Logo />
        <nav className={styles.footer__socialNetworks}>
          <ul className={styles.footer__linksList}>
            <li className={styles.footer__listItem}>
              <a
                href="https://t.me/prozhito"
                className={styles.footer__linkNet}
                target="_blank"
              >
                <img
                  src={telegramImg}
                  alt="Телеграм"
                  className={`${styles.footer__socialIcon} ${styles.footer__icon_position}`}
                />
                <span
                  className={`${styles.footer__linkText} ${styles.footer__linkText_display_none}`}
                >
                  Телеграм
                </span>
              </a>
            </li>
            <li className={styles.footer__listItem}>
              <a
                href="https://vk.com/prozhito"
                className={styles.footer__linkNet}
                target="_blank"
              >
                <img
                  src={vkImg}
                  alt="Вконтакте"
                  className={styles.footer__socialIcon}
                />
                <span
                  className={`${styles.footer__linkText} ${styles.footer__linkText_display_none}`}
                >
                  Вконтакте
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <nav className={styles.footer__legalInfo}>
          <ul
            className={`${styles.footer__linksList} ${styles.footer__flex_direction}`}
          >
            <li className={styles.footer__listItem}>
              <a href="#" className={styles.footer__linkNet}>
                <span className={styles.footer__linkText}>
                  Юридическая информация
                </span>
              </a>
            </li>
            <li className={styles.footer__listItem}>
              <a href="#" className={styles.footer__linkNet}>
                <span className={styles.footer__linkText}>
                  Политика конфиденциальности
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
