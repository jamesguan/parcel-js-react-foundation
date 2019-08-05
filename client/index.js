import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, Route } from 'react-router5'
import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';

import { App } from '@myproject/landing/src';


const routes = [
  { name: 'home', path: '/' },
];

const router = createRouter(routes);

router.usePlugin(browserPlugin());
router.start();


ReactDOM.render(
  <RouterProvider router={router}>
    <Route>
      {(routeProps) => <App route={routeProps.route} />}
    </Route>
  </RouterProvider>,
  document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}