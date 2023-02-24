import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../app/store";
import { getDiarys } from "../../utils/api";
import { TDiary } from "../types/types";

interface IInitialState {
  diarysArr?: Array<TDiary>;
  diarysRequested: boolean;
  diarysFailed: boolean;
}

const initialState: IInitialState = {
  diarysRequested: false,
  diarysFailed: false,
};

export const diarysSlice = createSlice({
  name: "diarys",
  initialState,
  reducers: {
    diarysRequest(state) {
      state.diarysRequested = true;
      state.diarysFailed = false;
    },
    diarysSuccess(state, action: PayloadAction<Array<TDiary>>) {
      state.diarysArr = action.payload;
      state.diarysRequested = false;
      state.diarysFailed = false;
    },
    diarysFailed(state) {
      state.diarysRequested = false;
      state.diarysFailed = true;
    },
  },
});

export const { diarysSuccess, diarysRequest, diarysFailed } =
  diarysSlice.actions;

export const getDiarysArr = () => {
  return (dispatch: AppDispatch) => {
    dispatch(diarysRequest());

    getDiarys()
      .then((res: TDiary[]) => {
        if (res) {
          dispatch(diarysSuccess(res));
        } else {
          dispatch(diarysFailed());
        }
      })
      .catch(() => {
        dispatch(diarysFailed());
      });
  };
};
