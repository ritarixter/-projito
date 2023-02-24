import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../app/store";
import { getNews } from "../../utils/api";
import { TNews } from "../types/types";

interface IInitialState {
  newsArr?: Array<TNews>;
  newsRequested: boolean;
  newsFailed: boolean;
}

const initialState: IInitialState = {
  newsRequested: false,
  newsFailed: false,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    newsRequest(state) {
      state.newsRequested = true;
      state.newsFailed = false;
    },
    newsSuccess(state, action: PayloadAction<Array<TNews>>) {
      state.newsArr = action.payload;
      state.newsRequested = false;
      state.newsFailed = false;
    },
    newsFailed(state) {
      state.newsRequested = false;
      state.newsFailed = true;
    },
  },
});

export const { newsSuccess, newsRequest, newsFailed } = newsSlice.actions;

export const getNewsArr = () => {
  return (dispatch: AppDispatch) => {
    dispatch(newsRequest());

    getNews()
      .then((res: TNews[]) => {
        if (res) {
          dispatch(newsSuccess(res));
        } else {
          dispatch(newsFailed());
        }
      })
      .catch(() => {
        dispatch(newsFailed());
      });
  };
};
