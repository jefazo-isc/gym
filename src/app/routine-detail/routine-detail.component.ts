import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-routine-detail',
  templateUrl: './routine-detail.component.html',
  styleUrls: ['./routine-detail.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class RoutineDetailComponent implements OnInit {
  routineId: string | null = null;
  routineData: any;

  routines = [
    {
      id: 'body-pump',
      title: 'Rutina de Body Pump 🏋️‍♂️',
      description: 'Programa de entrenamiento para fortalecer y tonificar el cuerpo, utilizando pesas y ejercicios sincronizados con música.',
      schedule: [
        'Lunes - Miércoles - Viernes: 6:00 AM - 7:00 AM',
        'Martes - Jueves: 7:00 PM - 8:00 PM'
      ],
      trainers: ['Carlos Mendoza', 'Valeria García'],
      packages: [
        { name: 'Mensual', price: '$600' },
        { name: 'Trimestral', price: '$1500' },
        { name: 'Anual', price: '$5000' }
      ]
    },
    {
      id: 'boxeo',
      title: 'Rutina de Boxeo 🥊',
      description: 'Entrenamiento completo para mejorar la fuerza, resistencia y coordinación a través de técnicas de boxeo y circuitos de alta intensidad.',
      schedule: [
        'Lunes a Viernes: 7:00 AM - 8:00 AM',
        'Sábados: 9:00 AM - 10:00 AM'
      ],
      trainers: ['Miguel Ramírez', 'Ana García'],
      packages: [
        { name: 'Mensual', price: '$500' },
        { name: 'Trimestral', price: '$1300' },
        { name: 'Anual', price: '$4600' }
      ]
    },
    {
      id: 'yoga',
      title: 'Rutina de Yoga 🧘',
      description: 'Sesiones de yoga para mejorar la flexibilidad, reducir el estrés y fortalecer la conexión mente-cuerpo.',
      schedule: [
        'Lunes - Miércoles - Viernes: 8:00 AM - 9:00 AM',
        'Sábados: 11:00 AM - 12:00 PM'
      ],
      trainers: ['Mariana López', 'Santiago Ruiz'],
      packages: [
        { name: 'Mensual', price: '$400' },
        { name: 'Trimestral', price: '$1000' },
        { name: 'Anual', price: '$3500' }
      ]
    },
    {
      id: 'crossfit',
      title: 'Rutina de Crossfit 💪',
      description: 'Entrenamientos funcionales de alta intensidad, incluyendo levantamiento de pesas y ejercicios de gimnasio.',
      schedule: [
        'Lunes - Miércoles - Viernes: 5:00 PM - 6:00 PM',
        'Martes - Jueves: 6:00 AM - 7:00 AM'
      ],
      trainers: ['Sergio Torres', 'Laura Jiménez'],
      packages: [
        { name: 'Mensual', price: '$700' },
        { name: 'Trimestral', price: '$1800' },
        { name: 'Anual', price: '$6500' }
      ]
    },
    {
      id: 'pilates',
      title: 'Rutina de Pilates 🧘‍♀️',
      description: 'Entrenamiento de bajo impacto para fortalecer el core, mejorar la postura y aumentar la flexibilidad.',
      schedule: [
        'Martes - Jueves: 7:00 AM - 8:00 AM',
        'Sábados: 8:00 AM - 9:00 AM'
      ],
      trainers: ['Laura Medina', 'Samuel Rodríguez'],
      packages: [
        { name: 'Mensual', price: '$450' },
        { name: 'Trimestral', price: '$1200' },
        { name: 'Anual', price: '$4000' }
      ]
    },
    {
      id: 'zumba',
      title: 'Rutina de Zumba 💃',
      description: 'Clases de baile al ritmo de la música latina para quemar calorías y mejorar la coordinación.',
      schedule: [
        'Lunes - Miércoles - Viernes: 6:00 PM - 7:00 PM',
        'Sábados: 10:00 AM - 11:00 AM'
      ],
      trainers: ['Andrea Morales', 'José Martínez'],
      packages: [
        { name: 'Mensual', price: '$300' },
        { name: 'Trimestral', price: '$800' },
        { name: 'Anual', price: '$2800' }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

 ngOnInit() {
 	this.routineId = this.route.snapshot.paramMap.get('id');
 	this.routineData = this.routines.find(routine => routine.id === this.routineId);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
