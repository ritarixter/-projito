import styles from "./Diary.module.css";
import { Card } from "../Card/Card";
import { useAppSelector } from "../../app/hooks/reduxHooks";
import { FC } from "react";
import React from "react";

interface IDiary {
  onClick: () => void;
}

export const Diary: FC<IDiary> = ({ onClick }) => {
  const { diarysArr } = useAppSelector((store) => store.diarys);

  const [sliderNumber, setSliderNumber] = React.useState(1)

  const sliderScroll = React.useCallback((evt: React.UIEvent<HTMLUListElement, UIEvent>) => {
    const slider = evt.currentTarget.scrollLeft
    
    if (slider > 180 && slider <= 450) {
      setSliderNumber(2)
    }
    else if (slider > 450) {
      setSliderNumber(3)
    }
    else {
      setSliderNumber(1)
    }
  }, [])
  
  return (
    <>
      <h2 className={styles.title}>Материалы</h2>
      <ul className={styles.cards} onScroll={sliderScroll}>
        {diarysArr?.map((card) => {
          return <Card card={card} key={card.id} onClick={onClick} />;
        })}
      </ul>
      <div className={styles.slider}>
        <button
          className={sliderNumber === 1 ? `${styles.button} ${styles.button_current}` : styles.button}
        ></button>
        <button className={sliderNumber === 2 ? `${styles.button} ${styles.button_current}` : styles.button}></button>
        <button className={sliderNumber === 3 ? `${styles.button} ${styles.button_current}` : styles.button}></button>
      </div>
    </>
  );
};