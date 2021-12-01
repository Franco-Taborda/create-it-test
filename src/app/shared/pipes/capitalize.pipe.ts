import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  public transform(str: string): string {
    return str[0].toUpperCase() + str.substring(1).toLowerCase();
  }
}
