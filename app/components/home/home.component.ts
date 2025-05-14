import { Component } from '@angular/core';
import { CardsPrincipalComponent } from '../../cards-principal/cards-principal.component';
import { CarruselPrincipalComponent } from '../../carrusel-principal/carrusel-principal.component';
import { ComentariosComponent } from '../../comentarios/comentarios.component';
import { VideoComponent} from '../video/video.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsPrincipalComponent, CarruselPrincipalComponent,ComentariosComponent,VideoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
