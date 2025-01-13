import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { QuizzService } from '../../services/quizz.service';
import { QuizzInput } from '../../interfaces/quizz-input.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-life-cycle-quizz',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, CommonModule, RouterLink],

  styleUrl: './life-cycle-quizz.component.scss',
  template: `
    <div class="flex flex-col items-center justify-center p-5">
      <div class="w-2/5 bg-gray-200 rounded-full h-4 mb-4 md:mt-10">
        <div
          class="bg-indigo-600 h-4 rounded-full"
          [style.width.%]="progressBarWidth"
        ></div>
      </div>
      <p class="md:mt-5">
        {{ 'common.question-list-text' | translate }}
      </p>
      <h2 class="text-indigo-800 mt-10 md:text-3xl md:mt-20 md:w-9/12 font-semibold">
        <span [class.loading-dots]="question() === 'Loading'">{{ question() }}</span>
      </h2>
      <form
        [formGroup]="form"
        (ngSubmit)="onSubmit()"
        class="w-full flex flex-col"
      >
        <textarea
          formControlName="answer"
          id="answer"
          name="answer"
          class="text-area h-28 md:ml-40 mt-10 md:w-4/5 md:h-44"
          placeholder=" Votre réponse..."
        >
        </textarea>
        <div class="flex justify-center">
          <button class="button-custom mt-5"
          [routerLink]="homeRoute">
            {{ 'common.retour-cta' | translate }}
          </button>
          <button
            class="button-custom mt-5 ml-20"
            type="submit"
            [disabled]="form.invalid"
          >
            {{ 'common.envoyer-cta' | translate }}
          </button>
        </div>
      </form>
    </div>
  `,
})
export default class LifeCycleQuizzComponent {
  homeRoute = '/quizz';
  form: FormGroup<{ answer: FormControl<string> }>;
  progressBarWidth = 20;

  question = signal<string>('Loading');
  error = signal<string | null>(null);

  constructor(private fb: FormBuilder, private quizzService: QuizzService) {
    this.form = this.fb.group({
      answer: new FormControl<string>('', {
        nonNullable: true,
        validators: Validators.required,
      }),
    });
    this.initializeFirstQuestion();
  }

  private initializeFirstQuestion(): void {
    this.quizzService.getQuestion().subscribe({
      next: (response) => {
        this.question.set(response);
      },
      error: (error) => {
        console.error('Erreur :', error);
        this.error.set('Erreur : Impossible de charger la question.');
        this.question.set('Oups ! Une erreur est survenue.');
      }
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formValue: QuizzInput = this.form.value as QuizzInput;
      this.quizzService.submitAnswer(formValue).subscribe({
        next: (response) => {
          console.log('Success:', response);
        },
        error: (error) => {
          console.error('Error:', error);
        },
      });
    }
  }
}
