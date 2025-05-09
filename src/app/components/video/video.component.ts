import { Component } from '@angular/core';
import { DomseguroPipe } from './domseguro.pipe';

@Component({
  selector: 'app-video',
  imports: [DomseguroPipe],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {
  video:string="N85YNZVVgZc";
}
