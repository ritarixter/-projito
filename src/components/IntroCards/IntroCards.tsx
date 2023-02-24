import { FC } from "react";
import styles from "./IntroCards.module.css";
import IntroCard from "../IntroCard/IntroCard";

interface IIntroCards {
  onClick: () => void;
}

const IntroCards: FC<IIntroCards> = ({ onClick }) => {
  return (
    <ul className={styles.intro__cards}>
    <IntroCard title="Передать документы" text="Передайте в «Прожито» копии документов из семейного архива, чтобы сделать их доступнее исследователям и читателям" tag="Подробнее" onClick={onClick}/>
    <IntroCard title="Стать волонтёром" text="Вы можете помочь нашему делу — для работы с документами нужен компьютер и несколько свободных часов в неделю" tag="Узнать больше" onClick={onClick}/>
    <IntroCard title="Дневники и воспоминания" text="Мы собрали тексты опубликованных дневников и воспоминаний и сделали по ним расширенный поиск" tag="Ознакомиться" onClick={onClick}/>
    <IntroCard title="Работа с архивом" text="Как устроен наш архив и поиск по сохранённым документам" tag="Перейти к архиву" onClick={onClick}/>
    </ul>
  );
};

export default IntroCards;