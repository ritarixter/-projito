import { FC } from "react";
import styles from "./PopupBanner.module.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/reduxHooks";

interface PopupProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => void;
}

const PopupBanner: FC<PopupProps> = ({ onClose, onClick }) => {
  const { popup } = useAppSelector((store) => store.popup);

  function closeHandler() {
    onClose(false);
  }

  return (
    <div className={styles.banner}>
      <button className={styles.banner__button} onClick={closeHandler}></button>
      <div onClick={onClick}>
        <Link to="/sample" className={styles.banner__link}>
          <h2 className={styles.banner__title}>{popup?.title}</h2>
          <p className={styles.banner__subtitle}>{popup?.subtitle}</p>
        </Link>
      </div>
    </div>
  );
};

export default PopupBanner;
