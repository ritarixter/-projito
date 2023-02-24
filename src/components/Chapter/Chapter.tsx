import React from "react";
import { FC } from "react";
import styles from "./Chapter.module.css";
import { Link } from "react-router-dom";
import arrow_right from "../../images/Arrow_right_intro.svg";
import { IChapter } from "../../services/types/types";

export const Chapter: FC<IChapter> = ({ title, textLink, link, onClick }) => {
  return (
    <div className={styles.chapter}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.tabletContainer} onClick={onClick}>
        <p className={styles.buttonText}>{textLink}</p>
        <Link to="/news" className={styles.button}>
          <img
            src={arrow_right}
            alt="Стрелка вправо"
            className={styles.arrow}
          />
        </Link>
      </div>
    </div>
  );
};
