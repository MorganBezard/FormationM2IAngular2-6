import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (args) {
      return value.totalTTC(args);
    }
    return value.totalHT();
  }
}
