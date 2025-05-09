import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class FooterComponent {
  // Redes sociales (enlaces funcionales)
  socialLinks = [
    { icon: 'facebook', url: 'https://facebook.com' },
    { icon: 'reddit', url: 'https://reddit.com' },
    { icon: 'telegram', url: 'https://telegram.com' },
  ];
}
