import { FC } from "react";
import styles from "./ButtonContents.module.css";

type TProps = {
  openTableContentsModal: () => void;
}

const ButtonContents: FC<TProps> = ({openTableContentsModal}) => {
  return (
    <button type="button" className={styles.button_contens} onClick={openTableContentsModal}>оглавление</button>
  );
};

export default ButtonContents;