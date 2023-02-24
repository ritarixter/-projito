import React from "react";
import styles from "./Article.module.css";
import {useAppSelector} from "../../app/hooks/reduxHooks";
import {shallowEqual} from "react-redux";

interface IArticle {
    firstContentIndex: number;
    lastContentIndex: number;
  }

export function Article(props: IArticle): JSX.Element {
    const journalArticlesData = useAppSelector((store) => store.journal.journalArr, shallowEqual);

    let articleData;
    if (journalArticlesData !== undefined) {
        articleData = journalArticlesData.slice(props.firstContentIndex, props.lastContentIndex).map((item, id) => {
            if (item.tag === "Тематическая подборка") {
                return (
                    <div className={styles.article} key={id}>
                        <a className={styles.article__link} href={"#"}>
                            <div className={styles.article__img}>
                                <p className={styles.article__topic}>{item.tag}</p>
                                <h2 className={styles.article__title}>{item.title}</h2>
                                <h3 className={styles.article__subtitle}>{item.subtitle}</h3>
                                <p className={`${styles.article__paragraph} ${styles.article__display_none}`}>{item.text}</p>
                            </div>
                        </a>
                    </div>
                )
            } else if (item.tag === "Опыт читателя") {
                return (
                    <div className={`${styles.article} ${styles.article__back_color}`} key={id}>
                        <a className={styles.article__link} href={"#"}>
                            <h2 className={`${styles.article__title} ${styles.article__title_color} ${styles.article__position_center} ${styles.article__title_top}`}>{item.title}</h2>
                            <div className={styles.article__portrait}></div>
                            <p className={`${styles.article__text}`}>{item.subtitle}</p>
                            <p className={`${styles.article__text} ${styles.article__text_uppercase}`}>{item.tag}</p>
                        </a>
                    </div>
                )
            } else {
                return (
                    <div className={styles.article} key={id}>
                        <a className={styles.article__link} href={"#"}>
                            <div className={styles.article__back}>
                                <p className={`${styles.article__topic} ${styles.article__topicSpec}`}>{item.tag}</p>
                                <div className={styles.article__background}>
                                    <h2 className={`${styles.article__title} ${styles.article__mobile_color}`}>{item.title}</h2>
                                    <h3 className={`${styles.article__subtitle} ${styles.article__mobile_color}`}>{item.subtitle}</h3>
                                    <p className={`${styles.article__paragraph} ${styles.article__display_none} ${styles.article__mobile_color}`}>{item.text}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                )
            }
        })
    }

    return (
        <>
            {articleData}
        </>
    )
}