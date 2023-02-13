import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

export interface FormFeild {
  id: string;
  name: string;
}
const fakeData = [
  { id: '1', name: 'name1' },
  { id: '2', name: 'name2' },
  { id: '3', name: 'name3' },
  { id: '4', name: 'name4' },
  { id: '5', name: 'name5' },
];
@Injectable({
  providedIn: 'root',
})
export class LayoutServiceService {
  constructor(private fb: FormBuilder) {}

  init(): FormGroup {
    const formArray = this.convertToFormArray(fakeData);
    return formArray;
  }

  //convert array of object to angular form array
  convertToFormArray(data: { id: string; name: string }[]): FormGroup {
    const formGroup = this.fb.group({});
    data.forEach((item) => {
      const formGroupcp = this.fb.group({
        id: [item.id],
        name: [item.name],
      });
      formGroup.setControl(item.id, formGroupcp);
    });
    return formGroup;
  }
}
