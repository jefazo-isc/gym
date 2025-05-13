import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule   
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  adminName: string = '';
  registrosTemplate: { key: string, data: any }[] = [];
  registroEditandoIndex: number | null = null;
  registroEditando = { nombre: '', genero: '', plan: '', fecha: '' };
  registrosReactivo: { key: string, data: any }[] = [];
  comentarioEditandoIndex: number | null = null;
  formComentario: FormGroup;
  asuntos = ['Sugerencia', 'Problema técnico', 'Reclamación', 'Otro'];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private fb: FormBuilder, 
    private router: Router
  ) {
    this.formComentario = this.fb.group({
      nombre: [''],
      email: [''],
      asunto: [''],
      comentario: ['']
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const admin = JSON.parse(localStorage.getItem('currentAdmin') || '{}');
      this.adminName = admin?.nombre || 'Sin sesión';
      this.cargarDatos();
    }
  }

  cargarDatos() {
    if (!isPlatformBrowser(this.platformId)) return;

    // Código de carga de datos template
    const template: any[] = [];
   const localStorageLength = localStorage.length; // <--- Acceso seguro
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('registroUsuario')) {
        const data = localStorage.getItem(key);
        if (data) template.push({ key, data: JSON.parse(data) });
      }
    }
    this.registrosTemplate = template;

    // Código de carga de datos reactivo
    const comentarios: any[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('comentario')) {
        const data = localStorage.getItem(key);
        if (data) comentarios.push({ key, data: JSON.parse(data) });
      }
    }
    this.registrosReactivo = comentarios;
  }

  // TEMPLATE
  eliminarRegistroTemplate(i: number) {
    const key = this.registrosTemplate[i].key;
    localStorage.removeItem(key);
    this.cargarDatos();
  }

  editarRegistroTemplate(i: number) {
    this.registroEditandoIndex = i;
    this.registroEditando = { ...this.registrosTemplate[i].data };
  }

  guardarEdicionTemplate() {
    if (this.registroEditandoIndex !== null) {
      const key = this.registrosTemplate[this.registroEditandoIndex].key;
      localStorage.setItem(key, JSON.stringify(this.registroEditando));
      this.registroEditandoIndex = null;
      this.registroEditando = { nombre: '', genero: '', plan: '', fecha: '' };
      this.cargarDatos();
    }
  }

  cancelarEdicionTemplate() {
    this.registroEditandoIndex = null;
  }

  // REACTIVO
  eliminarRegistroReactivo(i: number) {
    const key = this.registrosReactivo[i].key;
    localStorage.removeItem(key);
    this.cargarDatos();
  }

  editarRegistroReactivo(i: number) {
    this.comentarioEditandoIndex = i;
    this.formComentario.setValue({ ...this.registrosReactivo[i].data });
  }

  guardarEdicionReactivo() {
    if (this.comentarioEditandoIndex !== null) {
      const key = this.registrosReactivo[this.comentarioEditandoIndex].key;
      localStorage.setItem(key, JSON.stringify(this.formComentario.value));
      this.comentarioEditandoIndex = null;
      this.formComentario.reset();
      this.cargarDatos();
    }
  }

  cancelarEdicionReactivo() {
    this.comentarioEditandoIndex = null;
  }

  logout() {
  localStorage.removeItem('currentAdmin');
  this.adminName = ''; // ✅ Evita que quede visible
  this.router.navigate(['/login']);
}

}

