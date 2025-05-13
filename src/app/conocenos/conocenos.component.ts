import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgOptimizedImage } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { A11yModule } from '@angular/cdk/a11y';

@Component({
  standalone: true,
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.scss'],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    NgOptimizedImage,
    MatCommonModule,
    A11yModule
  ]
})
export class ConocenosComponent {
  private breakpointObserver = inject(BreakpointObserver);

  cols = 3;
  rowHeight = '350px';

  teamMembers = [
    {
      name: 'Ricardo Padilla Hernandez',
      role: 'CEO',
      bio: 'Fundador con 10 años de experiencia en tecnología...',
      avatar: 'riki.jpeg',
      whatsapp: '+523951196699'
    },
    {
      name: 'Jaime Alberto Cruz Rodriguez',
      role: 'CEO',
      bio: 'Fundador con 10 años de experiencia en tecnología...',
      avatar: 'jaime.jpeg',
      whatsapp: '+524494592064'
    },
    {
      name: 'Yahir Guevara Cardona',
      role: 'CEO',
      bio: 'Fundador con 10 años de experiencia en tecnología...',
      avatar: 'yahir.jpeg',
      whatsapp: '+524493308858'
    },
  ];

  constructor() {
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait
    ]).subscribe(result => {
      this.cols = result.matches ? 
        (this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait) ? 1 : 2) 
        : 3;
        
      this.rowHeight = result.matches ? 
        (this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait) ? '500px' : '400px') 
        : '350px';
    });
  }

  openWhatsApp(phone: string): void {
    const message = encodeURIComponent('Hola, me gustaría obtener más información');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank', 'noopener noreferrer');
  }
}
