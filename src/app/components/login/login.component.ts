// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <h2>Login Administrador</h2>
      <input 
        [(ngModel)]="username" 
        placeholder="Nombre de usuario"
        class="form-control"
      >
      <input 
        type="password" 
        [(ngModel)]="password" 
        placeholder="Contraseña"
        class="form-control"
      >
      <button (click)="login()" class="btn btn-primary">Ingresar</button>
    </div>
  `,
  styles: [
    `
    .login-container {
      max-width: 400px;
      margin: 2rem auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    .form-control {
      margin: 10px 0;
      width: 100%;
    }
    `
  ]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    const admin = this.authService.validateUser(this.username, this.password);
    if (admin) {
      localStorage.setItem('currentAdmin', JSON.stringify(admin));
      this.router.navigate(['/admin']);
    } else {
      Swal.fire('Error', 'Credenciales incorrectas', 'error');
    }
  }
}
