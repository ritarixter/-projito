import React, { FC } from "react";
import styles from "./Card.module.css";
import { TDiary } from "../../services/types/types";
import { Link } from "react-router-dom";

interface CardProps {
  card: TDiary;
  onClick: () => void;
}

export const Card: FC<CardProps> = (props) => {
  const { card, onClick } = props;
  const newTitle = React.useMemo(() => {
    let title: string | string[] = card.title.split(' ')
    title.splice(title.length - 1, 0, '\r\n')
    return title.length > 3 ? title = title.join(' ') : title = title.join('')
  }, [card.title])
  
  return (
    <li className={`${styles.card} ${styles.itemslider}`} onClick={onClick}>
      <Link to="/sample" className={styles.link}>
        <p className={styles.tag}>{card.label}</p>
        <p className={styles.title}>{newTitle}</p>
        <img
          src={card.image}
          alt={card.title}
          className={styles.image}
        />
        <p className={styles.text}>
          {card.text}
        </p>
      </Link>
    </li>
  );
};
