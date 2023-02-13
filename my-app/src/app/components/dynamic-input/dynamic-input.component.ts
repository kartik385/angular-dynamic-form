import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormFeild } from 'src/app/services/layout-service.service';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.css'],
})
export class DynamicInputComponent {
  @Input() formGroup!: FormGroup;
  @Input() usersArray!: any[];
}
