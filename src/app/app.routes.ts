import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'admin',
    loadComponent: () => import('./components/admin/admin.component').then(m => m.AdminComponent)
  },
  {
    path: 'planes',
    loadComponent: () => import('./planes/planes.component').then(m => m.PlanesComponent)
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.component').then(m => m.RegistroComponent)
  },
  {
    path: 'rutinas',
    loadComponent: () => import('./rutinas/rutinas.component').then(m => m.RutinasComponent)
  },
  {
    path: 'conocenos',
    loadComponent: () => import('./conocenos/conocenos.component').then(m => m.ConocenosComponent)
  },
  {
    path: 'booking-form',
    loadComponent: () => import('./components/booking-form/booking-form.component').then(m => m.BookingFormComponent)
  },
  {
    path: 'classes',
    loadComponent: () => import('./components/classes/classes.component').then(m => m.ClassesComponent)
  },
  {
    path: 'footer',
    loadComponent: () => import('./components/footer/footer.component').then(m => m.FooterComponent)
  },
  {
    path: 'header',
    loadComponent: () => import('./components/header/header.component').then(m => m.HeaderComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'subscription-form',
    loadComponent: () => import('./components/subscription-form/subscription-form.component').then(m => m.SubscriptionFormComponent)
  },
  {
    path: 'rutina/:id',
    loadComponent: () => import('./routine-detail/routine-detail.component').then(m => m.RoutineDetailComponent)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
