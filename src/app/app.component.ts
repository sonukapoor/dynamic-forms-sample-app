import { Component } from '@angular/core';

import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicApiFormComponent } from './dynamic-api-form/dynamic-api-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DynamicFormComponent, DynamicApiFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
