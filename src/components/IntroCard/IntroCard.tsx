import { FC } from "react";
import styles from "./IntroCard.module.css";
import arrow_right from "../../images/Arrow_right_intro.svg";
import { Link } from "react-router-dom";

interface IIntroCard {
  title: string;
  text: string;
  tag: string;
  onClick?: () => void;
}

const IntroCard: FC<IIntroCard> = ({ title, text, tag, onClick }) => {
  return (
    <li className={styles.intro__card}>
      <h3 className={styles.intro__card_title}>{title}</h3>
      <p className={styles.intro__card_subtitle}>{text}</p>
      {onClick && (
        <div className={styles.intro__link_container} onClick={onClick}>
          <p className={styles.intro__about_link}>{tag}</p>
          <Link to="/sample" className={styles.button}>
            <img
              src={arrow_right}
              alt="Стрелка вправо"
              className={styles.arrow}
            />
          </Link>
        </div>
      )}
      {!onClick && (
        <div className={styles.intro__link_container}>
          <p className={styles.intro__about_link}>{tag}</p>
          <Link to="/sample" className={styles.button}>
            <img
              src={arrow_right}
              alt="Стрелка вправо"
              className={styles.arrow}
            />
          </Link>
        </div>
      )}
    </li>
  );
};

export default IntroCard;
