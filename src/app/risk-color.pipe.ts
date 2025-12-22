import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'riskColor',
  standalone: true
})
export class RiskColorPipe implements PipeTransform {
  transform(risk: string): string {
    switch(risk) {
      case 'Low':
        return '#28a745';
      case 'Medium':
        return '#ffc107';
      case 'High':
        return '#fd7e14';
      case 'Critical':
        return '#dc3545';
      default:
        return '#6c757d';
    }
  }
}