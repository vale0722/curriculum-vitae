import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../presentation/pages/HomePage';

function RenderRoutes({ routes }) {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          key={route.key}
          element={<route.element props={route} routes={route.routes} />}
        />
      ))}
    </Routes>
  );
}

const ROUTES = [
  {
    path: '/',
    key: 'home',
    element: RenderRoutes,
    routes: [
      {
        path: '/',
        key: 'APP_ROOT',
        exact: true,
        element: HomePage,
      },
    ],
  },
];

export { ROUTES, RenderRoutes };
