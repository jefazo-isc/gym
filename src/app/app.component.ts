// app.component.ts
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { CardsPrincipalComponent } from './cards-principal/cards-principal.component';
import { CarruselPrincipalComponent } from './carrusel-principal/carrusel-principal.component';
import { UbicacionesPrincipalComponent } from './ubicaciones-principal/ubicaciones-principal.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CardsPrincipalComponent,
    CarruselPrincipalComponent,
    UbicacionesPrincipalComponent,
  ]
})
export class AppComponent {
  currentAdmin: any;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    // Acceder a localStorage solo en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const adminData = localStorage.getItem('currentAdmin');
      this.currentAdmin = adminData ? JSON.parse(adminData) : null;
    }
  }
}
