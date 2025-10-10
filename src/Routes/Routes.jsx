import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import AppDetails from '../pages/AppDetails/AppDetails';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import AppNotFound from '../pages/AppNotFound/AppNotFound';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
    children: [
        {index: true, loader: () => fetch('/public/homeAppsData.json'),  path: '/', Component: Home},
        {path: 'apps', loader: () => fetch('/public/apps.json'), Component: Apps},
        {path: 'installation', Component: Installation},
        {path: '/appDetails/:id', loader: () => fetch('/public/apps.json'), Component: AppDetails, errorElement: <AppNotFound></AppNotFound>},
        {path: '/installation', Component: Installation },
        { path: '*', Component: ErrorPage }
    ]
  },
]);