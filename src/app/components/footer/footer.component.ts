import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface SocialMedia {
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  socialMedia: SocialMedia[] = [
    { name: 'Instagram', icon: 'camera_alt', url: '#' },
    { name: 'Facebook', icon: 'facebook', url: '#' },
    { name: 'YouTube', icon: 'play_circle', url: '#' }
  ];

  contactInfo = {
    email: 'contacto@gymforce.com',
    phone: '+34 900 555 555',
    address: 'Calle Fitness, 123 - Madrid'
  };
}
