import axios from "axios";
import {
  TBunner,
  TDiary,
  TJournalMaterial,
  TNews,
  Tpopup,
  TSpecialProject,
} from "../services/types/types";
const api = axios.create({
  baseURL: "http://localhost:5001",
});

//http://localhost:3001/news-samples — вернет массив всех новостей
export const getNews = () =>
    api.get<TNews[]>("news-samples").then((res) => res.data);

//http://localhost:3001/popup/id — вернет контент попапа по id
//TODO: добавить TPopup
export const getPopup = (id: number) =>
    api.get<Tpopup>(`popups/${id}`).then((res) => res.data);

//http://localhost:3001/sample-bunner/id — вернет контент баннера по id
//TODO: добавить TBunner
export const getBunner = (id: number) =>
    api.get<TBunner>(`sample-bunners/${id}`).then((res) => res.data);

//http://localhost:3001/diarys — вернет массив всех дневников
//TODO: добавить TDiary
export const getDiarys = () =>
    api.get<TDiary[]>("diarys").then((res) => res.data);

//http://localhost:3001/journal-materials — вернет массив всех материалов
//TODO: добавить TJournalMaterial
export const getJournal = () =>
    api.get<TJournalMaterial[]>("journal-materials").then((res) => res.data);

//http://localhost:3001/special-projects — вернет массив всех специальных проектов
//TODO: добавить TMaterials
export const getSpecialProjects = () =>
    api.get<TSpecialProject[]>("special-projects").then((res) => res.data);
