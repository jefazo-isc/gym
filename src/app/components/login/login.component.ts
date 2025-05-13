import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  admins = [
    { username: 'admin1', password: '1234', nombre: 'Juan Pérez' },
    { username: 'admin2', password: 'abcd', nombre: 'María López' },
    { username: 'admin3', password: 'adminpass', nombre: 'Carlos Ruiz' }
  ];

  login() {
    const admin = this.admins.find(
      user => user.username === this.username && user.password === this.password
    );

    if (!admin) {
      Swal.fire('Error', 'Credenciales incorrectas', 'error');
    } else {
      Swal.fire({
        title: `Bienvenido, ${admin.nombre}`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      }).then(() => {
        // ✅ Guardar el admin en localStorage
        localStorage.setItem('currentAdmin', JSON.stringify(admin));
        // ✅ Redirigir a la vista de administración
        this.router.navigate(['/admin']);
      });
    }
  }
}
