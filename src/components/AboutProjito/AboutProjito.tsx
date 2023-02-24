import { FC } from "react";
import styles from "./AboutProjito.module.css";

const AboutProjito: FC = () => {
  return (
    <h1 className={styles.title}>
      Центр «Прожито» собирает, описывает и публикует документы личного
      происхождения и разрабатывает исследовательские инструменты для работы
      с ними. Материалы публикуются и описываются силами участников-волонтёров,
      к сообществу которых может присоединиться каждый.
    </h1>
  );
};

export default AboutProjito;
