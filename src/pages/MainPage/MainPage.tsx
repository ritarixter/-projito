import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainPage.module.css";
import AboutProjito from "../../components/AboutProjito/AboutProjito";
import IntroCards from "../../components/IntroCards/IntroCards";
import PopupBanner from "../../components/PopupBanner/PopupBanner";
import { Chapter } from "../../components/Chapter/Chapter";
import { NewsSlider } from "../../components/NewsSlider/NewsSlider";
import { Diary } from "../../components/Diary/Diary";
import { BannerMaterials } from "../../components/BannerMaterials/BannerMaterials";
import { JournalSlider } from "../../components/JournalSlider/JournalSlider";
import { SpecProjects } from "../../components/SpecProjects/SpecProjects";
import { useAppSelector } from "../../app/hooks/reduxHooks";

const MainPage: FC = () => {
  const { newsArr } = useAppSelector((store) => store.news);
  const { journalArr } = useAppSelector((store) => store.journal);
  const [popup, setPopup] = useState<boolean>(true);
  const navigate = useNavigate();

  if (!newsArr || !journalArr) {
    //TODO: create Load-page
    return null;
  }

  const onClickNews = () => {
    const initialBreadcrumb = [
      { pathname: "/", url: "/", title: "Главная страница" },
    ];
    navigate("/news", { replace: true, state: initialBreadcrumb });
  };

  const onClickJournal = () => {
    const initialBreadcrumb = [
      { pathname: "/", url: "/", title: "Главная страница" },
    ];
    navigate("/journal", { replace: true, state: initialBreadcrumb });
  };

  const onClickIntro = () => {
    const initialBreadcrumb = [
      { pathname: "/", url: "/", title: "Главная страница" },
    ];
    navigate("/sample", { replace: true, state: initialBreadcrumb });
  };

  return (
    <div className={styles.main}>
      <section className={styles.intro}>
        <div className={styles.intro__container}>
          <AboutProjito />
          <IntroCards onClick={onClickIntro} />
        </div>
        {popup && <PopupBanner onClose={setPopup} onClick={onClickIntro} />}
      </section>
      <section className={styles.newsMain}>
        <Chapter
          title={"Новости и события"}
          textLink={"Ко всем новостям"}
          link={"#"}
          onClick={onClickNews}
        />
        <NewsSlider Cards={newsArr} />
      </section>
      <section className={styles.materials}>
        <Diary onClick={onClickIntro} />
      </section>
      <section className={styles.banner}>
        <BannerMaterials onClick={onClickIntro} />
      </section>
      <section className={styles.journalMain}>
        <Chapter
          title={"Журнал «Прожито»"}
          textLink={"Посмотреть всю подборку"}
          link={"#"}
          onClick={onClickJournal}
        />
        <JournalSlider Cards={journalArr} />
      </section>
      <SpecProjects onClick={onClickIntro}/>
    </div>
  );
};

export default MainPage;
