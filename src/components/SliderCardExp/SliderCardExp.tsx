import React from "react";
import { TJournalMaterial } from "../../services/types/types";
import { Image } from "pure-react-carousel";
import styles from "./SliderCardExp.module.css";

type Props = {
  el: TJournalMaterial;
};

const SliderCardExp = ({ el }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <h4 className={styles.cardTitle}>{el.title}</h4>
        <img src={el.image} className={styles.image} />
        <p className={styles.description}>{el.text}</p>
      </div>
      <p className={styles.tag}>{el.tag}</p>
    </div>
  );
};

export default SliderCardExp;
