import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../app/store";
import { getPopup } from "../../utils/api";
import { Tpopup } from "../types/types";

interface IInitialState {
  popup?: Tpopup;
  popupRequested: boolean;
  popupFailed: boolean;
}

const initialState: IInitialState = {
  popupRequested: false,
  popupFailed: false,
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    popupRequest(state) {
      state.popupRequested = true;
      state.popupFailed = false;
    },
    popupSuccess(state, action: PayloadAction<Tpopup>) {
      state.popup = action.payload;
      state.popupRequested = false;
      state.popupFailed = false;
    },
    popupFailed(state) {
      state.popupRequested = false;
      state.popupFailed = true;
    },
  },
});

export const { popupRequest, popupSuccess, popupFailed } = popupSlice.actions;

export const getPopupSample = (id: number) => {
  return (dispatch: AppDispatch) => {
    dispatch(popupRequest());

    getPopup(id)
      .then((res: Tpopup) => {
        if (res) {
          dispatch(popupSuccess(res));
        } else {
          dispatch(popupFailed());
        }
      })
      .catch(() => {
        dispatch(popupFailed());
      });
  };
};
