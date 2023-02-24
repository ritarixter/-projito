import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks/reduxHooks";
import { Footer } from "../Footer/Footer";
import { getNewsArr } from "../../services/slices/news";
import { getPopupSample } from "../../services/slices/popup";
import { getBunnerSample } from "../../services/slices/bunner";
import { getDiarysArr } from "../../services/slices/diarys";
import { getJournalArr } from "../../services/slices/journalMaterials";
import { getSpecialProjectsArr } from "../../services/slices/specialProjects";
import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import NewsPage from "../../pages/NewsPage/NewsPage";
import { SamplePage } from "../../pages/SamplePage/SamplePage";
import JournalPage from "../../pages/JournalPage/JournalPage";
import MainPage from "../../pages/MainPage/MainPage";
import useRouterScrollTop from "../../app/hooks/useRouterScrollTop";

function App() {
  const dispatch = useAppDispatch();
  useRouterScrollTop();

  useEffect(() => {
    dispatch(getNewsArr());
    dispatch(getPopupSample(0));
    dispatch(getBunnerSample(0));
    dispatch(getDiarysArr());
    dispatch(getJournalArr());
    dispatch(getSpecialProjectsArr());
  }, [dispatch]);

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/sample" element={<SamplePage />} />
          <Route path="/journal" element={<JournalPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
