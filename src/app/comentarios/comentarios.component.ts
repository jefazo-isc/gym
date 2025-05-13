import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {
  form!: FormGroup;
  asuntos = ['Sugerencia', 'Problema técnico', 'Reclamación', 'Otro'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      comentario: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.form.controls;
  }

  enviarComentario(): void {
    const datos = this.form.value;

    // Obtener siguiente clave libre
    let index = 1;
    while (localStorage.getItem(`comentario${index}`)) {
      index++;
    }

    localStorage.setItem(`comentario${index}`, JSON.stringify(datos));

    // ✅ Solo mostrar "Comentario enviado"
    Swal.fire('Comentario enviado', '', 'success');

    this.form.reset();
  }
}
