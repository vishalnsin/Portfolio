import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Vishal Narayan Singh | Java & Angular Software Engineer',
    loadComponent: () => import('./homepage/homepage').then((m) => m.Homepage),
  },
  {
    path: 'projects',
    title: 'Projects | Vishal Narayan Singh',
    loadComponent: () => import('./project/project').then((m) => m.Projects),
  },
  { path: '**', redirectTo: '' },
];