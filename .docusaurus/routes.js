import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Digital-Design-Studio-A601/about',
    component: ComponentCreator('/Digital-Design-Studio-A601/about', 'b45'),
    exact: true
  },
  {
    path: '/Digital-Design-Studio-A601/projects',
    component: ComponentCreator('/Digital-Design-Studio-A601/projects', 'f80'),
    exact: true
  },
  {
    path: '/Digital-Design-Studio-A601/docs',
    component: ComponentCreator('/Digital-Design-Studio-A601/docs', '899'),
    routes: [
      {
        path: '/Digital-Design-Studio-A601/docs',
        component: ComponentCreator('/Digital-Design-Studio-A601/docs', '7ee'),
        routes: [
          {
            path: '/Digital-Design-Studio-A601/docs',
            component: ComponentCreator('/Digital-Design-Studio-A601/docs', 'c2d'),
            routes: [
              {
                path: '/Digital-Design-Studio-A601/docs/intro',
                component: ComponentCreator('/Digital-Design-Studio-A601/docs/intro', 'e67'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Digital-Design-Studio-A601/',
    component: ComponentCreator('/Digital-Design-Studio-A601/', '08b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
