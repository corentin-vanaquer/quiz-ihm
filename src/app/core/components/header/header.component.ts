import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  styleUrl: './header.component.scss',
  template: `
    <header class="text-center bg-gradient-to-tr from-indigo-400 to-indigo-600 w-full p-5 rounded-b shadow-lg z-10">
      <h1 class="text-white text-lg font-sans font-bold text-shadow">
        {{ "common.title-header" | translate }}
      </h1>
    </header>
  `,
})
export class HeaderComponent {}
