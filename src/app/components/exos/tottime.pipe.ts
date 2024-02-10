import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exo1'
})
export class Exo1Pipe implements PipeTransform {

  transform(value: number): string {
    let sec = value % 60
    let min = Math.floor(value / 60)
    return `${min < 10 ? '0' : ''} minutes ${sec < 10 ? '0' : ''} secondes`
  }

}
