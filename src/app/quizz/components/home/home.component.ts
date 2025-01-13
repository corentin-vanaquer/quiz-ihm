import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  styleUrl: './home.component.scss',
  template: `
    <div class="flex flex-col items-center md:mt-20 mt-10 justify-center p-5">
      <h2 class=" text-indigo-800 md:text-4xl text-2xl font-semibold">
        {{ 'common.home-page-title' | translate }}
      </h2>
      <ul class="mt-5 text-indigo-800 list-disc list-inside md:text-lg md:mt-10">
        <li>
          {{ 'common.home-page-first-li' | translate }}
        </li>
        <li class="mt-2">
          {{ 'common.home-page-second-li' | translate }}
        </li>
      </ul>

      <h3 class="text-indigo-800 font-semibold mt-20 md:text-lg">
        Choisissez le sujet :
      </h3>

      <div class="flex w-4/6 md:w-3/6 justify-center gap-10 mt-20">
        <button class="button-custom"
        [routerLink]="lifeCycleRoute">
          {{ 'common.cycle-de-vie-cta' | translate }}
        </button>
        <button class="button-custom">
        {{ 'common.rxjs-cta' | translate }}
        </button>
      </div>
    </div>
  `,
})
export default class HomeComponent {
  lifeCycleRoute = '/quizz/lifeCycle';
}
