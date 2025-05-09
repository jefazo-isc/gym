import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cards-principal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cards-principal.component.html',
  styleUrls: ['./cards-principal.component.scss']
})
export class CardsPrincipalComponent {
  cards = [
    {
      id: 'body-pump',
      title: 'Rutina de Body Pump 🏋️‍♂️',
      image: '/pesas.jpg',
      points: [
        'Entrenamiento de tren inferior y superior completos',
        'Series intensas y concentradas en cada musculo',
        'Mejora fuerza y masa muscular al igual que la estetica'
      ]
    },
    {
      id: 'boxeo',
      title: 'Rutina de Boxeo 🥊',
      image: '/boxeo.jpg',
      points: [
        'Entrenamiento de fuerza, resistencia y coordinación',
        'Combinación de golpes y movimientos defensivos',
        'Mejora la velocidad, agilidad y resistencia cardiovascular'
      ]
    },
    {
      id: 'yoga',
      title: 'Rutina de Yoga 🧘',
      image: '/yoga.jpg',
      points: [
        'Enfoque en la flexibilidad, equilibrio y conexión mente-cuerpo',
        'Posturas estáticas y en movimiento para estirar y fortalecer músculos',
        'Ayuda a reducir el estrés y mejora la postura corporal'
      ]
    },
    {
      id: 'crossfit',
      title: 'Rutina de Crossfit 💪',
      image: '/crossfit.jpg',
      points: [
        'Entrenamientos funcionales de alta intensidad',
        'Levantamiento de pesas, ejercicios cardiovasculares y gimnasia',
        'Mejora fuerza, resistencia y condición física general'
      ]
    },
    {
      id: 'pilates',
      title: 'Rutina de Pilates 🧘‍♀️',
      image: '/pilates.jpg',
      points: [
        'Entrenamiento de bajo impacto enfocado en fortalecer el core',
        'Ejercicios de control y estabilidad para mejorar la postura',
        'Incrementa la flexibilidad y tonifica los músculos sin impacto'
      ]
    },
    {
      id: 'zumba',
      title: 'Rutina de Zumba 💃',
      image: '/zumba.jpg',
      points: [
        'Clases dinámicas de baile para quemar calorías',
        'Coreografías fáciles de seguir al ritmo de música latina e internacional',
        'Mejora la resistencia, coordinación y quema de grasa'
      ]
    }
  ];
}
