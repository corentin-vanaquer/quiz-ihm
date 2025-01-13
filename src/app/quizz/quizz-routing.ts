import { Routes } from "@angular/router";

export const QUIZZ_ROUTING: Routes = [

  {path: '', loadComponent: () => import('./components/home/home.component')},
  {path: 'lifeCycle', loadComponent: () => import('./components/life-cycle-quizz/life-cycle-quizz.component')},

];