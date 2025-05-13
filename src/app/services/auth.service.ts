import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface CurrentUser {
  nombre: string;
  email: string;
  token?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  login(credentials: { email: string; password: string }): boolean {
    if (isPlatformBrowser(this.platformId)) {
      // Simula un token devuelto por el backend
      const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9…';
      const user: CurrentUser = {
        nombre: 'Admin',
        email: credentials.email,
        token: fakeToken
      };
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('currentUser');
    }
  }

  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('currentUser');
    }
    return false;
  }

  /** Nuevo método para el interceptor */
  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      const raw = localStorage.getItem('currentUser');
      if (!raw) return null;
      const user: CurrentUser = JSON.parse(raw);
      return user.token || null;
    }
    return null;
  }
}
