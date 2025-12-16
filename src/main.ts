import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  // Exemple de main ts

  /* 
  import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { M01_SalutacioComponent } from './app/m01-salutacio.component';
import { M02_SumaComponent } from './app/m02-suma.component';
import { AlumnesComponent } from './app/alumnes';
import { M04_PomodoroComponent } from './app/m04-pomodoro.component';
import {M08_PipesComponent} from './app/m08-pipes.component';

// Cambia el component que es carrega a l'inici de l'aplicació
// per veure els diferents exemples
// bootstrapApplication(App, appConfig)

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
  */