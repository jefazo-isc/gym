import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AsideItem } from '../interfaces/aside-item.interface';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  @Input() isVisible = true;
  @Output() toggle = new EventEmitter<void>();
  
  asideContent: AsideItem[] = [
    {
      type: 'announcement',
      title: '¡Nuevas Clases!',
      content: 'Yoga funcional los viernes a las 18:00h',
      icon: 'sports_gymnastics',
      color: '#FF6B6B'
    },
    {
      type: 'tip',
      title: 'Consejo del Día',
      content: 'Hidrátate bien durante el entrenamiento',
      icon: 'local_drink'
    },
    {
      type: 'contact',
      title: 'Soporte 24/7',
      content: 'WhatsApp: +34 666 777 888',
      icon: 'support_agent',
      color: '#4CAF50'
    }
  ];
}
