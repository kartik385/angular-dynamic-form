import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputForm'
})
export class InputFormPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
