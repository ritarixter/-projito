import React, { useEffect } from "react";
import styles from "./journalPage.module.css";
import { useAppDispatch } from "../../app/hooks/reduxHooks";
import { Articles } from "../../components/Articles/Articles";
import { getJournalArr } from "../../services/slices/journalMaterials";
import { useNavigate, useLocation } from "react-router-dom";
import { isContainRoute } from "../../services/breadcrumbs";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrambs";
import { IState, ILocation } from "../../services/types/types";

function JournalPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location: ILocation = useLocation();

  const state = location.state as IState[];
  const pathname = location.pathname as string;

  useEffect(() => {
    if (state && !isContainRoute(state, pathname)) {
      navigate("/journal", {
        replace: true,
        state: [
          ...state,
          { pathname, url: "/journal", title: `Журнал «Прожито»` },
        ],
      });
    }
  }, [state, pathname]);

  useEffect(() => {
    dispatch(getJournalArr());
  }, []);

  const onClickIntro = () => {
    navigate("/sample", {
      replace: false,
      state: [
        ...state,
        { pathname, url: "/sample", title: `Опыт прочтения одного дневника` },
      ],
    });
  };

  return (
    <section className={styles.journal}>
      <Breadcrumbs />
      <div className={styles.journal__flexBox}>
        <h1 className={styles.journal__title}>Журнал «Прожито»</h1>
        <nav>
          <p className={styles.journal__text}>Сортировать : </p>
          <div className={styles.journal__tablet}>
            <button className={styles.journal__btn} type={"button"}>
              ВСЕ
            </button>
            <button className={styles.journal__btn} type={"button"}>
              ТЕМАТИЧЕСКАЯ ПОДБОРКА
            </button>
            <button className={styles.journal__btn} type={"button"}>
              СПЕЦПРОЕКТЫ
            </button>
            <button
              className={styles.journal__btn}
              type={"button"}
              onClick={onClickIntro}
            >
              ОПЫТ ЧИТАТЕЛЯ
            </button>
          </div>
        </nav>
      </div>
      <Articles />
    </section>
  );
}

export default JournalPage;
