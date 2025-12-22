import { Routes } from '@angular/router';
import { TippingPointsComponent } from './tipping-points.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tipping-points', pathMatch: 'full' },
  { path: 'tipping-points', component: TippingPointsComponent },
  { path: '**', redirectTo: 'tipping-points' }
];

/*
import { Routes } from '@angular/router';
import { M01_SalutacioComponent } from './m01-salutacio.component';
import { M02_SumaComponent } from './m02-suma.component';
import { AlumnesComponent } from './alumnes';
import { M04_PomodoroComponent } from './m04-pomodoro.component';
import { M08_PipesComponent } from './m08-pipes.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'suma', pathMatch: 'full' },
	{ path: 'salutacio', component: M01_SalutacioComponent },
	{ path: 'suma', component: M02_SumaComponent },
	{ path: 'pomodoro', component: M04_PomodoroComponent },
	{ path: 'pipes', component: M08_PipesComponent },
	{ path: 'alumnes', component: AlumnesComponent },
	{ path: '**', redirectTo: 'alumnes' }
];

*/ 