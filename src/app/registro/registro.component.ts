import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 necesario para *ngIf y *ngFor
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,         // ✅ Esto es lo que faltaba
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule
  ],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  nombre: string = '';
  genero: string = '';
  plan: string = '';
  fecha: string = '';
  fechaMinima: string = '';
  planesDisponibles: string[] = ['Básico', 'Intermedio', 'Avanzado'];

  ngOnInit(): void {
    this.fechaMinima = new Date().toISOString().split('T')[0];
  }

  guardarFormulario(): void {
    const datos = {
      nombre: this.nombre,
      genero: this.genero,
      plan: this.plan,
      fecha: this.fecha
    };
    localStorage.setItem('registroUsuario', JSON.stringify(datos));
    alert('Formulario enviado correctamente ✅');
  }
}
