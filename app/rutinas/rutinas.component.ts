import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ExerciseService, Exercise } from '../services/exercise.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from '../components/truncate.pipe';

@Component({
  selector: 'app-rutinas',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TruncatePipe],
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.scss']
})
export class RutinasComponent {
  exercises: Exercise[] = [];
  searchTerm: string = '';
  selectedType: string = 'strength';
  isLoading = false;
  error: string | null = null;
  
  @Input() showDetails: boolean = false;
  @Output() exerciseSelected = new EventEmitter<Exercise>();

  constructor(private exerciseService: ExerciseService) {}

  loadExercises(type: string): void {
    this.isLoading = true;
    this.error = null;
    this.selectedType = type;
    
    this.exerciseService.getExercises(type, this.searchTerm).subscribe({
      next: (data: Exercise[]) => {
        this.exercises = data.slice(0, 5);
        this.isLoading = false;
      },
      error: (err: Error) => {
        this.error = 'Error: ' + err.message;
        this.isLoading = false;
      }
    });
  }

  onSearchInput(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.loadExercises(this.selectedType);
  }

  selectExercise(exercise: Exercise): void {
    this.exerciseSelected.emit(exercise);
  }

  getDifficultyClass(difficulty: string): string {
    return {
      beginner: 'beginner',
      intermediate: 'intermediate',
      expert: 'expert'
    }[difficulty.toLowerCase()] || 'beginner';
  }
}
