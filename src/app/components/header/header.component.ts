import { Component } from '@angular/core';
import { NavComponent } from '../../nav/nav.component'; // ruta según estructura


@Component({
  selector: 'app-header',
  imports: [NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
