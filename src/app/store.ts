import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { bunnerSlice } from "../services/slices/bunner";
import { diarysSlice } from "../services/slices/diarys";
import { journalSlice } from "../services/slices/journalMaterials";
import { newsSlice } from "../services/slices/news";
import { popupSlice } from "../services/slices/popup";
import { specialSlice } from "../services/slices/specialProjects";
import { burgerMenuSlice } from "../services/slices/burgerMenu";

export const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
    popup: popupSlice.reducer,
    bunner: bunnerSlice.reducer,
    diarys: diarysSlice.reducer,
    journal: journalSlice.reducer,
    special: specialSlice.reducer,
    burger: burgerMenuSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
