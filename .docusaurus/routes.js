import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Digital-Design-Studio-A601/__docusaurus/debug',
    component: ComponentCreator('/Digital-Design-Studio-A601/__docusaurus/debug', '901'),
    exact: true
  },
  {
    path: '/Digital-Design-Studio-A601/__docusaurus/debug/config',
    component: ComponentCreator('/Digital-Design-Studio-A601/__docusaurus/debug/config', '727'),
    exact: true
  },
  {
    path: '/Digital-Design-Studio-A601/__docusaurus/debug/content',
    component: ComponentCreator('/Digital-Design-Studio-A601/__docusaurus/debug/content', 'e6d'),
    exact: true
  },
  {
    path: '/Digital-Design-Studio-A601/__docusaurus/debug/globalData',
    component: ComponentCreator('/Digital-Design-Studio-A601/__docusaurus/debug/globalData', '994'),
    exact: true
  },
  {
    path: '/Digital-Design-Studio-A601/__docusaurus/debug/metadata',
    component: ComponentCreator('/Digital-Design-Studio-A601/__docusaurus/debug/metadata', 'de3'),
    exact: true
  },
  {
    path: '/Digital-Design-Studio-A601/__docusaurus/debug/registry',
    component: ComponentCreator('/Digital-Design-Studio-A601/__docusaurus/debug/registry', '1e7'),
    exact: true
  },
  {
    path: '/Digital-Design-Studio-A601/__docusaurus/debug/routes',
    component: ComponentCreator('/Digital-Design-Studio-A601/__docusaurus/debug/routes', 'e22'),
    exact: true
  },
  {
    path: '/Digital-Design-Studio-A601/about',
    component: ComponentCreator('/Digital-Design-Studio-A601/about', 'b45'),
    exact: true
  },
  {
    path: '/Digital-Design-Studio-A601/projects',
    component: ComponentCreator('/Digital-Design-Studio-A601/projects', '6c2'),
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
