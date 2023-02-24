export type TNews = {
  id: number;
  date: string;
  type: string;
  text: string;
  image: string;
};
export type Tpopup = {
  id: number;
  title: string;
  subtitle: string;
};

export type TBunner = {
  id: number;
  title: string;
  text: string;
  image: string;
};

export type TDiary = {
  id?: number;
  title: string;
  label: string;
  text: string;
  image: string;
};

export type TJournalMaterial = {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  text: string;
  image: string;
};

export type TSpecialProject = {
  id?: 0;
  date: string;
  title: string;
  text: string;
  image: string;
  onClick: () => void;
};

export interface ICard {
  id: number;
  date: string;
  type: string;
  text: string;
  image: string;
}

export interface IState {
  pathname: string;
  url: string;
  title: string;
}

export interface ILocation {
  hash: string;
  key?: string;
  pathname?: string;
  search: string;
  state?: {
    pathname: string;
    url: string;
    title: string;
  }[] | unknown;
}

export interface IChapter {
  title: string;
  link: string;
  textLink: string;
  onClick: () => void;
}

