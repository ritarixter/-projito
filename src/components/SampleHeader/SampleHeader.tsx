import { FC } from "react";
import styles from "./SampleHeader.module.css";

export const SampleHeader: FC = () => {
  //Хлебные крошки нужно будет вынести в компонент
  return (
      <div className={styles.sample}>
        <ul className={styles.sample__subtitle}>
          <li className={styles.sample__subtitle_part}>детство</li>
          <li className={styles.sample__subtitle_part}>&#183;</li>
          <li className={styles.sample__subtitle_part}>опыт читателя</li>
        </ul>
      </div>
      )}