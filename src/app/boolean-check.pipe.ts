import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanCheck'
})
export class BooleanCheckPipe implements PipeTransform {

  transform(value: boolean, args?: any): string {
    if (value == true) {
      return "Thuis";
    } else {
      return "Uit";
    }
  }

}
