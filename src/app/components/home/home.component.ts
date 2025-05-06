import { Component } from '@angular/core';
import { CardsPrincipalComponent } from '../../cards-principal/cards-principal.component';
import { CarruselPrincipalComponent } from '../../carrusel-principal/carrusel-principal.component';
import { UbicacionesPrincipalComponent } from '../../ubicaciones-principal/ubicaciones-principal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsPrincipalComponent, CarruselPrincipalComponent,UbicacionesPrincipalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
