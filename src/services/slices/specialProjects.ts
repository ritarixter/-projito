import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../app/store";
import { getSpecialProjects } from "../../utils/api";
import { TSpecialProject } from "../types/types";

interface IInitialState {
  specialArr?: Array<TSpecialProject>;
  specialRequested: boolean;
  specialFailed: boolean;
}

const initialState: IInitialState = {
  specialRequested: false,
  specialFailed: false,
};

export const specialSlice = createSlice({
  name: "special",
  initialState,
  reducers: {
    specialRequest(state) {
      state.specialRequested = true;
      state.specialFailed = false;
    },
    specialSuccess(state, action: PayloadAction<Array<TSpecialProject>>) {
      state.specialArr = action.payload;
      state.specialRequested = false;
      state.specialFailed = false;
    },
    specialFailed(state) {
      state.specialRequested = false;
      state.specialFailed = true;
    },
  },
});

export const { specialSuccess, specialRequest, specialFailed } =
  specialSlice.actions;

export const getSpecialProjectsArr = () => {
  return (dispatch: AppDispatch) => {
    dispatch(specialRequest());

    getSpecialProjects()
      .then((res: TSpecialProject[]) => {
        if (res) {
          dispatch(specialSuccess(res));
        } else {
          dispatch(specialFailed());
        }
      })
      .catch(() => {
        dispatch(specialFailed());
      });
  };
};
