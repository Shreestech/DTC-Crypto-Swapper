import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/en/Home.vue";
import About from "../views/en/About.vue";
import SwapA from "../views/en/SwapA.vue";
import SwapB from "../views/en/SwapB.vue";
import SwapAA from "../views/en/SwapAA.vue";
import SwapAB from "../views/en/SwapAB.vue";
import CalculationA from "../views/en/CalculationA.vue";
import SwapBA from "../views/en/SwapBA.vue";
import SwapBB from "../views/en/SwapBB.vue";
import CalculationB from "../views/en/CalculationB.vue";

import HomeFr from "../views/ita/Home.vue";
import AboutFr from "../views/ita/About.vue";
import SwapAFr from "../views/ita/SwapA.vue";
import SwapBFr from "../views/ita/SwapB.vue";
import SwapAAFr from "../views/ita/SwapAA.vue";
import SwapABFr from "../views/ita/SwapAB.vue";
import CalculationAFr from "../views/ita/CalculationA.vue";
import SwapBAFr from "../views/ita/SwapBA.vue";
import SwapBBFr from "../views/ita/SwapBB.vue";
import CalculationBFr from "../views/ita/CalculationB.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/swap-a",
    name: "SwapA",
    component: SwapA,
  },
  {
    path: "/swap-b",
    name: "SwapB",
    component: SwapB,
  },
  {
    path: "/swap-a-a",
    name: "SwapAA",
    component: SwapAA,
  },
  {
    path: "/swap-a-b",
    name: "SwapAB",
    component: SwapAB,
  },
  {
    path: "/calculationA",
    name: "CalculationA",
    component: CalculationA,
  },
  {
    path: "/swap-b-a",
    name: "SwapBA",
    component: SwapBA,
  },
  {
    path: "/swap-b-b",
    name: "SwapBB",
    component: SwapBB,
  },
  {
    path: "/calculationB",
    name: "CalculationB",
    component: CalculationB,
  },
  
  {
    path: "/ita",
    name: "HomeFr",
    component: HomeFr,
  },
  {
    path: "/ita/about",
    name: "AboutFr",
    component: AboutFr,
  },
  {
    path: "/ita/swap-a",
    name: "SwapAFr",
    component: SwapAFr,
  },
  {
    path: "/ita/swap-b",
    name: "SwapBFr",
    component: SwapBFr,
  },
  {
    path: "/ita/swap-a-a",
    name: "SwapAAFr",
    component: SwapAAFr,
  },
  {
    path: "/ita/swap-a-b",
    name: "SwapABFr",
    component: SwapABFr,
  },
  {
    path: "/ita/calculationA",
    name: "CalculationAFr",
    component: CalculationAFr,
  },
  {
    path: "/ita/swap-b-a",
    name: "SwapBAFr",
    component: SwapBAFr,
  },
  {
    path: "/ita/swap-b-b",
    name: "SwapBBFr",
    component: SwapBBFr,
  },
  {
    path: "/ita/calculationB",
    name: "CalculationBFr",
    component: CalculationBFr,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;