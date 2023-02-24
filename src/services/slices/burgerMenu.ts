import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  isBurgerMenuOpened: boolean;
}

const initialState: IInitialState = {
  isBurgerMenuOpened: false,
};

export const burgerMenuSlice = createSlice({
  name: "burger-menu",
  initialState,
  reducers: {
    openBurgerMenu(state) {
      state.isBurgerMenuOpened = true;
    },
    closeBurgerMenu(state) {
      state.isBurgerMenuOpened = false;
    }
  },
});

export const { openBurgerMenu, closeBurgerMenu } = burgerMenuSlice.actions;