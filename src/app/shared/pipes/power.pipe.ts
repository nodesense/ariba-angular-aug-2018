import { Pipe, PipeTransform } from '@angular/core';

// {{ 2 | power:3 }}

// {{ 5 | power }}

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, exponent: number = 1): number {
    return Math.pow(value, exponent);
  }

}
