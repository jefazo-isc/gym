import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent {
  id: string | null = null;
  clase: any = null;

  clases = [
    { id: '1', nombre: 'Zumba', instructor: 'Ana Pérez', horario: 'Lunes y miércoles 6pm', descripcion: 'Clase energética de baile.' },
    { id: '2', nombre: 'Yoga', instructor: 'Carlos Ruiz', horario: 'Martes y jueves 8am', descripcion: 'Yoga para relajación y flexibilidad.' },
    { id: '3', nombre: 'Spinning', instructor: 'Laura Gómez', horario: 'Viernes 7am', descripcion: 'Cardio intenso en bicicleta.' },
    { id: '4', nombre: 'Pilates', instructor: 'María Torres', horario: 'Lunes y viernes 9am', descripcion: 'Fortalece tu core y mejora tu postura.' },
    { id: '5', nombre: 'HIIT', instructor: 'Luis Martínez', horario: 'Miércoles y viernes 6pm', descripcion: 'Entrenamiento de intervalos de alta intensidad.' },
    { id: '6', nombre: 'Boxeo', instructor: 'José Ramírez', horario: 'Martes y jueves 7pm', descripcion: 'Técnicas de box y mejora cardiovascular.' },
    { id: '7', nombre: 'CrossFit', instructor: 'Elena Gómez', horario: 'Lunes, miércoles y viernes 5pm', descripcion: 'Entrenamiento funcional de alta demanda.' },
    { id: '8', nombre: 'Body Pump', instructor: 'Marco Díaz', horario: 'Lunes y miércoles 8am', descripcion: 'Sesiones con pesas al ritmo de la música.' },
    { id: '9', nombre: 'Stretching', instructor: 'Paola Sánchez', horario: 'Sábados 10am', descripcion: 'Estiramientos guiados para movilidad y relajación.' },
    { id: '10', nombre: 'TRX', instructor: 'Diana Flores', horario: 'Martes y jueves 6am', descripcion: 'Entrenamiento en suspensión para todo el cuerpo.' }
  ];

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.clase = this.clases.find(c => c.id === this.id);
    }
  }
}
