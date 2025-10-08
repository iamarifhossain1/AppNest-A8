import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import AppDetails from '../pages/AppDetails/AppDetails';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {index: true, loader: () => fetch('/public/appsData.json'),  path: '/', Component: Home},
        {path: 'apps', Component: Apps},
        {path: 'installation', Component: Installation},
        {path: '/appDetails/:id', loader: () => fetch('/public/appsData.json'), Component: AppDetails}
    ]
  },
]);