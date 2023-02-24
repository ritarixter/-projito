import React, {FC} from "react";
import styles from "./TableContentsModal.module.css";
import closeImg from "../../images/banner__close-button.svg"

type TProps = {
    closeModal: () => void;
}

function TableContentsModal ({closeModal}: TProps): JSX.Element {
    return (
        <div className={styles.modal}>
            <button className={styles.modal__close} style={{backgroundImage: `url(${closeImg})`}} onClick={closeModal}></button>
            <nav className={styles.modal__navigation}>
                <p className={styles.modal__text}>
                    <a href={"#"} className={styles.modal__link}>Часть один</a>
                </p>
                <p className={styles.modal__text}>
                    <a href={"#"} className={styles.modal__link}>Часть два</a>
                </p>
                <p className={styles.modal__text}>
                    <a href={"#"} className={styles.modal__link}>Часть три</a>
                </p>
            </nav>
        </div>
    )
}

export default TableContentsModal;