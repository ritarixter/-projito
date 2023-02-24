import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../app/store";
import { getJournal } from "../../utils/api";
import { TJournalMaterial } from "../types/types";

interface IInitialState {
  journalArr?: Array<TJournalMaterial>;
  journalRequested: boolean;
  journalFailed: boolean;
}

const initialState: IInitialState = {
  journalRequested: false,
  journalFailed: false,
};

export const journalSlice = createSlice({
  name: "journal-material",
  initialState,
  reducers: {
    journalRequest(state) {
      state.journalRequested = true;
      state.journalFailed = false;
    },
    journalSuccess(state, action: PayloadAction<Array<TJournalMaterial>>) {
      state.journalArr = action.payload;
      state.journalRequested = false;
      state.journalFailed = false;
    },
    journalFailed(state) {
      state.journalRequested = false;
      state.journalFailed = true;
    },
  },
});

export const { journalSuccess, journalRequest, journalFailed } =
  journalSlice.actions;

export const getJournalArr = () => {
  return (dispatch: AppDispatch) => {
    dispatch(journalRequest());

    getJournal()
      .then((res: TJournalMaterial[]) => {
        if (res) {
          dispatch(journalSuccess(res));
        } else {
          dispatch(journalFailed());
        }
      })
      .catch(() => {
        dispatch(journalFailed());
      });
  };
};
