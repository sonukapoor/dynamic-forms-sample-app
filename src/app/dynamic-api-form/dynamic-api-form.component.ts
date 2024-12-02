import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-api-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-api-form.component.html',
  styleUrls: ['./dynamic-api-form.component.scss'],
})
export class DynamicApiFormComponent implements OnInit {
  dynamicForm!: FormGroup;
  formConfig: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.fetchFormConfig().then((config) => {
      this.formConfig = config;
      this.buildForm(config.fields);
    });
  }

  async fetchFormConfig() {
    // Simulate an API call
    return {
      fields: [
        { label: 'Username', type: 'text', required: true },
        { label: 'Age', type: 'number', required: false },
        {
          label: 'Gender',
          type: 'select',
          options: ['Male', 'Female'],
          required: true,
        },
      ],
    };
  }

  buildForm(fields: any[]) {
    const controls: any = {};
    fields.forEach((field) => {
      const validators = field.required ? [Validators.required] : [];
      controls[field.label] = ['', validators];
    });
    this.dynamicForm = this.fb.group(controls);
  }

  submitForm() {
    console.log(this.dynamicForm.value);
  }
}
