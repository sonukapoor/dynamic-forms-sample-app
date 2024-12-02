import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent {
  dynamicForm: FormGroup; // Main form group

  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({
      name: [''], // Simple input field
      email: [''], // Another input field
      fields: this.fb.array([]), // Dynamic fields will be stored here
    });
  }

  // Getter to access the FormArray for dynamic fields
  get fields(): FormArray {
    return this.dynamicForm.get('fields') as FormArray;
  }

  /**
   * Adds a new field to the dynamic form.
   */
  addField() {
    const fieldGroup = this.fb.group({
      label: [''], // Label for the field
      value: [''], // Value of the field
    });
    this.fields.push(fieldGroup);
  }

  /**
   * Removes a field from the dynamic form at a specific index.
   * @param index Index of the field to be removed.
   */
  removeField(index: number) {
    this.fields.removeAt(index);
  }

  /**
   * Submits the form and logs its current value to the console.
   */
  submitForm() {
    console.log('test', this.dynamicForm.value);
  }
}
