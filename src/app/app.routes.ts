import { Routes } from '@angular/router';

export const routes: Routes = [

  {path:'', redirectTo: 'quizz', pathMatch: 'full'},

  {
    path: 'quizz',
    loadChildren: () =>
      import('./quizz/quizz-routing').then((m) => m.QUIZZ_ROUTING),
  },
];
