// services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  adminAccounts = [
    { username: 'admin1', password: '1234', nombre: 'Ana Pérez' },
    { username: 'admin2', password: '5678', nombre: 'Carlos Gómez' }
  ];

  validateUser(username: string, password: string) {
    return this.adminAccounts.find(acc => 
      acc.username === username && acc.password === password
    );
  }
}
