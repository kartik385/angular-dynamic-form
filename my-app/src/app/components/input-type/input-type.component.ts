import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input-type',
  templateUrl: './input-type.component.html',
  styleUrls: ['./input-type.component.css'],
})
export class InputTypeComponent implements OnInit {
  @Input() user: any;
  @Input() formGroup!: FormGroup;
  controls!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.rrr();
  }

  // ngOnit() {

  // }

  rrr() {
    // return formArray which has user
    const formArray = this.formGroup.get('users') as FormArray;
    for (let i = 0; i < formArray.length; i++) {
      if (formArray.at(i).get('id')?.value === this.user.id) {
        this.controls = formArray.at(i) as FormGroup;
      }
    }
    if (!this.controls) {
      this.controls = this.fb.group({
        id: [this.user.id],
        name: [this.user.name, [Validators.required]],
      });
      formArray.push(this.controls);
    }
  }

  get users(): FormArray {
    return this.formGroup.get('users') as FormArray;
  }
}
