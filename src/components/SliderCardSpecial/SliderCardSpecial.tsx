import React from "react";
import { TJournalMaterial } from "../../services/types/types";
import styles from "./SliderCardSpecial.module.css";

type Props = {
  el: TJournalMaterial;
};

const SliderCardSpecial = ({ el }: Props) => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${el.image})`,
        backgroundSize: "cover",
      }}
    >
      <p className={styles.tag}>{el.tag}</p>
      <div className={styles.cardContainer}>
        <h4 className={styles.cardTitle}>{el.title}</h4>
        <p className={styles.cardSubTitle}>{el.subtitle}</p>
        <p className={styles.description}>{el.text}</p>
      </div>
    </div>
  );
};

export default SliderCardSpecial;
