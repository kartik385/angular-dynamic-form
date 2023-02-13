import { Component } from '@angular/core';
import {
  Form,
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
} from '@angular/forms';
import { LayoutServiceService } from './services/layout-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  keyV: string = '';
  formGroup: FormGroup;
  usersArray: any = [];
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      ff: [''],
      users: this.fb.array([]),
    });
  }

  ngOnInit(): void {}

  addNewUser() {
    this.usersArray.push({
      id: this.usersArray.length + 1,
      name: this.keyV,
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
