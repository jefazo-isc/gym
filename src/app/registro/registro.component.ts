import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,
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
  registros: any[] = [];
  planesDisponibles: string[] = ['Básico', 'Intermedio', 'Avanzado'];

  ngOnInit(): void {
    const hoy = new Date();
    this.fechaMinima = hoy.toISOString().split('T')[0];
    this.cargarRegistros();
  }

  guardarFormulario(): void {
    const datos = {
      nombre: this.nombre,
      genero: this.genero,
      plan: this.plan,
      fecha: this.fecha
    };

    // Encontrar la siguiente clave libre
    let index = 1;
    while (localStorage.getItem(`registroUsuario${index}`)) {
      index++;
    }

    // Guardar el nuevo usuario
    localStorage.setItem(`registroUsuario${index}`, JSON.stringify(datos));

    Swal.fire('¡Éxito!', `Usuario ${index} guardado correctamente ✅`, 'success');

    // Limpiar el formulario
    this.nombre = '';
    this.genero = '';
    this.plan = '';
    this.fecha = '';

    // Actualizar la tabla
    this.cargarRegistros();
  }

  cargarRegistros(): void {
    this.registros = [];

    for (let i = 0; i < localStorage.length; i++) {
      const clave = localStorage.key(i);
      if (clave && clave.startsWith('registroUsuario')) {
        const item = localStorage.getItem(clave);
        if (item) {
          try {
            const obj = JSON.parse(item);
            this.registros.push({ clave, ...obj });
          } catch {}
        }
      }
    }

    // Opcional: ordenar por clave
    this.registros.sort((a, b) => a.clave.localeCompare(b.clave));
  }
}
