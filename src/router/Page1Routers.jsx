import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const page1Routes = [
  {
    path: "/Page1/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/Page1/detailA",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "/Page1/detailB",
    exact: false,
    children: <Page1DetailB />
  }
];
