import { atom } from "recoil";

export const currentPageState = atom({
  key: "currentPageState",
  default: 1,
});

export const pageSizeState = atom({
  key: "pageSizeState",
  default: 6,
});

export const pageNumbersState = atom({
  key: "pageNumbersState",
  default: [],
});

export const currentPageDataState = atom({
  key: "currentPageDataState",
  default: [],
});
