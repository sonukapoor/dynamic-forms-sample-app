import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DynamicApiFormComponent } from './dynamic-api-form/dynamic-api-form.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'api-form',
    component: DynamicApiFormComponent,
  },
];
