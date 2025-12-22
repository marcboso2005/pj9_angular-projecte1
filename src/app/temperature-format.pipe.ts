import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureFormat',
  standalone: true
})
export class TemperatureFormatPipe implements PipeTransform {
  transform(temperature: number): string {
    return `+${temperature}°C above pre-industrial levels`;
  }
}