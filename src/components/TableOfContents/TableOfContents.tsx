import React from "react";
import styles from "./TableOfContents.module.css";
import goBackImg from "../../images/Arrow_left.svg";
import {useNavigate} from "react-router-dom";
import Burger from "../Burger/Burger";

type TProps = {
    openTableContentsModal: () => void;
    changeVisible: string;
}

function TableOfContents({openTableContentsModal, changeVisible}: TProps): JSX.Element {
    const navigate = useNavigate();

    function goBack(): void {
        navigate(-1);
    }

    return (
        <div className={styles.contents__container} style={{display: changeVisible}}>
            <div className={styles.contents}>
                <button type={"button"} className={styles.contents__back} style={{backgroundImage: `url(${goBackImg})`}} onClick={goBack} />
                <button type={"button"} className={styles.contents__table} onClick={openTableContentsModal}>оглавление</button>
                <Burger />
            </div>
        </div>
    )
}

export default TableOfContents;