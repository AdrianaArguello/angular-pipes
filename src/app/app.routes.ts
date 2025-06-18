import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Basic Pipes',
    loadComponent: () => import('./pages/basic-page/basic-page.component')
  },
  {
    path: 'numbers',
    title: 'Numbers Pipes',
    loadComponent: () => import('./pages/number-page/number-page.component')
  },
  {
    path: 'custom',
    title: 'Custom Pipes',
    loadComponent: () => import('./pages/custom-page/custom-page.component')
  },
  {
    path: 'uncommon',
    title: 'Pipes not so common',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page.component')
  },
  {
    path: '**',
    redirectTo: 'basic'
  }
];
