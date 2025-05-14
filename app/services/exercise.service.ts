import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface Exercise {
  name: string;
  type: string;
  difficulty: string;
  instructions: string;
}

@Injectable({ providedIn: 'root' })
export class ExerciseService {
  private apiUrl = 'https://api.api-ninjas.com/v1/exercises';
  private apiKey = 'whkEZSZUXlnCP6rp3gssoA==npbPyN4R964IcKW7';

  constructor(private http: HttpClient) {}

  getExercises(type: string, name?: string): Observable<Exercise[]> {
    const headers = new HttpHeaders().set('X-Api-Key', this.apiKey);
    let params = new HttpParams().set('type', type);
    
    if (name) params = params.set('name', name);

    return this.http.get<Exercise[]>(this.apiUrl, { headers, params }).pipe(
      catchError(error => throwError(() => new Error('Error al obtener ejercicios')))
    );
  }
}
