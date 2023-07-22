import { lazy } from "react";


export const Layout = lazy (() => import ('../Layout/Layout.jsx'));
export const Home = lazy (() => import ('../pages/Home/Home.jsx'));
export const Skidki = lazy (() => import ('../pages/Skidki/Skidki.jsx'));
export const Jurnal = lazy (() => import ('../pages/Jurnal/Jurnal.jsx'));
export const Kategor = lazy (() => import ('../pages/Kategor/Kategor.jsx'));
export const Karzina = lazy (() => import ('../pages/Karzina/Karzina.jsx'));
export const PerKarzinka = lazy (() => import ('../pages/PerKarzinka/PerKarzinka.jsx'));