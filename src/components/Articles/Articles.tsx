import React from "react";
import styles from "./Articles.module.css";
import { Article } from "../Article/Article";
import {useAppSelector} from "../../app/hooks/reduxHooks";
import {shallowEqual} from "react-redux";

export function Articles (): JSX.Element {

    const journalArticlesData = useAppSelector((store) => store.journal.journalArr, shallowEqual);

    const [lastContentIndex, setLastContentIndex] = React.useState(9);
    const [disabled, setDisabled] = React.useState(false);

    function handleClick() {
        setLastContentIndex(lastContentIndex + 9);
        if (journalArticlesData !== undefined) {
            if ((lastContentIndex + 9) > journalArticlesData.length) {
                setDisabled(true);
            }
        }
    }

    return (
        <div className={styles.articles__flexBox}>
            <div className={styles.articles}>
                <Article firstContentIndex={0} lastContentIndex={lastContentIndex}/>
            </div>
            <button className={styles.articles__btn} type="button" onClick={handleClick} disabled={disabled}>Загрузить еще
                <svg
                    width="17"
                    height="12"
                    viewBox="0 0 17 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{marginLeft: "16px"}}
                    className={styles.image}>
                    <path
                        d="M10.389 0.707L15.192 5.51099H0.5V6.51099H15.192L10.389 11.315L11.096 12.022L17.106 6.01099L11.096 0L10.389 0.707Z"
                        fill="#323232"
                    />
                </svg>
            </button>
        </div>
    )
}