import styles from "./CardNews.module.css";
import { ICard } from "../../services/types/types";

function CardNews(props: {card: ICard; key?: undefined | string }) {
  
  const { card } = props;

  return (
    <li className={styles.item}>
        <p className={styles.date}>{card.date}</p>
        <p className={styles.tag}>{card.type}</p>
        <h2 className={styles.title}>{card.text}</h2>
        <img src={card.image} alt="" className={styles.image} />
    </li>
  );
}

export default CardNews;