// components/exercise-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-exercise-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="container">
      @if (loading) {
        <mat-progress-spinner mode="indeterminate"></mat-progress-spinner>
      } @else {
        <div class="grid">
          @for (exercise of exercises; track exercise.id) {
            <mat-card 
              [ngClass]="{'premium-exercise': exercise.difficulty === 'expert'}"
              [ngStyle]="{ 'border': selectedExercise === exercise.id ? '2px solid #2196F3' : 'none' }">
              <img mat-card-image [src]="exercise.gifUrl" [alt]="exercise.name">
              <mat-card-header>
                <mat-card-title>{{ exercise.name }}</mat-card-title>
                <mat-card-subtitle>{{ exercise.bodyPart }}</mat-card-subtitle>
              </mat-card-header>
              <mat-card-actions>
                <button 
                  mat-raised-button 
                  color="primary"
                  (click)="selectExercise.emit(exercise.id)">
                  Ver detalles
                </button>
              </mat-card-actions>
            </mat-card>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    .premium-exercise {
      background: linear-gradient(45deg, #f3e5f5 0%, #e8f5e9 100%);
    }
  `]
})
export class ExerciseListComponent {
  @Input() exercises: any[] = [];
  @Input() loading = false;
  @Input() selectedExercise: string | null = null;
  @Output() selectExercise = new EventEmitter<string>();
}
