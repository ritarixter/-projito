import { FC } from "react";
import styles from "./BannerMaterials.module.css";
import antipova from "../../images/diary.jpg";
import arrow from "../../images/Arrow_right.svg";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/reduxHooks";

interface IBannerMaterials {
  onClick: () => void;
}

export const BannerMaterials: FC<IBannerMaterials> = ({ onClick }) => {
  const { bunner } = useAppSelector((store) => store.bunner);
  return (
    <>
      <img
        src={bunner?.image}
        alt="фотография Антиповой"
        className={styles.image}
      />
      <h3 className={styles.subtitle}>{bunner?.title}</h3>
      <p className={styles.text}>{bunner?.text}</p>
      <div className={styles.buttonswrapper}>
        <div onClick={onClick}>
          <Link to="/sample" className={styles.button}>
            Перейти к материалу
            <img src={arrow} alt="стрелка направо" className={styles.arrow} />
          </Link>
        </div>
        <Link to="" className={`${styles.button} ${styles.buttonRight}`}>
          Оставить заявку
          <img src={arrow} alt="стрелка направо" className={styles.arrow} />
        </Link>
      </div>
    </>
  );
};
