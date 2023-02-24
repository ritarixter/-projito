import styles from "./NewsPage.module.css";
import CardNews from "../../components/CardNews/CardNews";
import { v4 as uuidv4 } from "uuid";
import React, { ReactNode, useEffect } from "react";
import { ICard, IState, ILocation } from "../../services/types/types";
import { useNavigate, useLocation } from "react-router-dom";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrambs";
import { isContainRoute } from "../../services/breadcrumbs";
import { useAppSelector } from "../../app/hooks/reduxHooks";

function NewsPage() {
  const { newsArr } = useAppSelector((store) => store.news);
  const navigate = useNavigate();
  const location: ILocation = useLocation();

  const state = location.state as IState[];
  const pathname = location.pathname as string;

  useEffect(() => {
    if (state && !isContainRoute(state, pathname)) {
      navigate("/news", {
        replace: true,
        state: [
          ...state,
          { pathname, url: "/news", title: "Новости и события" },
        ],
      });
    }
  }, [state, pathname]);

  return (
    <div className={styles.pagenews}>
      <Breadcrumbs />
      <section className={styles.news}>
        <h1 className={styles.title}>Новости и события</h1>
        <ul className={styles.cards}>
          {newsArr?.map((card: ICard): ReactNode => {
            const id = uuidv4();
            return <CardNews card={card} key={id} />;
          })}
        </ul>
        <button className={styles.button}>
          <p className={styles.text}>Загрузить еще</p>
          <svg
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.image}
          >
            <path
              d="M10.389 0.707L15.192 5.51099H0.5V6.51099H15.192L10.389 11.315L11.096 12.022L17.106 6.01099L11.096 0L10.389 0.707Z"
              fill="#323232"
            />
          </svg>
        </button>
      </section>
    </div>
  );
}

export default NewsPage;
