import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  ...appConfig,  // Combinamos la configuración existente
  providers: [
    ...(appConfig.providers || []),  // Preservamos los providers existentes
    provideHttpClient(),
    provideAnimations()
  ]
}).catch((err) => console.error(err));
