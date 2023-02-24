import { FC } from "react";
import styles from "./SpecProjects.module.css";
import arrow from "../../images/arrow_right_projects.svg";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/reduxHooks";
import { TSpecialProject } from "../../services/types/types";

interface ISpecProjects {
  onClick: () => void;
}

const Project: FC<TSpecialProject> = ({ date, title, image, text, onClick }) => {
  return (
    <div onClick={onClick}>
      <Link to="/sample" className={styles.project__card}>
        <img className={styles.project__image} alt={title} src={image} />
        <div className={styles.project__main_text}>
          <div className={styles.project__field}>
            <h3 className={styles.project__subtitle}>{title}</h3>
            <p className={styles.project__description}>{text}</p>
          </div>
          <p className={styles.project__date}>{date}</p>
        </div>
      </Link>
    </div>
  );
};

export const SpecProjects: FC<ISpecProjects> = ({ onClick }) => {
  const { specialArr } = useAppSelector((store) => store.special);

  return (
    <section className={styles.project}>
      <div className={styles.project__title_container}>
        <h2
          className={`${styles.section_title} ${styles.section_title_project_margin} ${styles.section_title_text_align}`}
        >
          Спецпроекты
        </h2>
      </div>
      <div className={styles.project__container}>
        {specialArr ? (
          specialArr.map((item) => (
            <Project
              date={item.date}
              title={item.title}
              text={item.text}
              image={item.image}
              onClick={onClick}
              key={item.id}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <button className={styles.button}>
        <span className={styles.button_text}>
          Все спецпроекты
          <img
            src={arrow}
            alt="стрелка направо"
            className={styles.button__arrow}
          />
        </span>
      </button>
    </section>
  );
};
