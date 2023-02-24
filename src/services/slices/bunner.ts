import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../app/store";
import { getBunner } from "../../utils/api";
import { TBunner } from "../types/types";

interface IInitialState {
  bunner?: TBunner;
  bunnerRequested: boolean;
  bunnerFailed: boolean;
}

const initialState: IInitialState = {
  bunnerRequested: false,
  bunnerFailed: false,
};

export const bunnerSlice = createSlice({
  name: "bunner",
  initialState,
  reducers: {
    bunnerRequest(state) {
      state.bunnerRequested = true;
      state.bunnerFailed = false;
    },
    bunnerSuccess(state, action: PayloadAction<TBunner>) {
      state.bunner = action.payload;
      state.bunnerRequested = false;
      state.bunnerFailed = false;
    },
    bunnerFailed(state) {
      state.bunnerRequested = false;
      state.bunnerFailed = true;
    },
  },
});

export const { bunnerRequest, bunnerSuccess, bunnerFailed } =
  bunnerSlice.actions;

export const getBunnerSample = (id: number) => {
  return (dispatch: AppDispatch) => {
    dispatch(bunnerRequest());

    getBunner(id)
      .then((res: TBunner) => {
        if (res) {
          dispatch(bunnerSuccess(res));
        } else {
          dispatch(bunnerFailed());
        }
      })
      .catch(() => {
        dispatch(bunnerFailed());
      });
  };
};
