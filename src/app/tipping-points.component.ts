import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TippingPoint } from './tipping-point.model';
import { TippingPointService } from './tipping-point.service';
import { RiskColorPipe } from './risk-color.pipe';
import { TemperatureFormatPipe } from './temperature-format.pipe';

@Component({
  selector: 'tipping-points',
  standalone: true,
  imports: [CommonModule, FormsModule, RiskColorPipe, TemperatureFormatPipe],
  template: `
    <div class="container">
      <h2>Climate Tipping Points</h2>
      
      <div class="searches">
        <div class="search-group">
          <label>Search by Country:</label>
          <input type="text" 
                 [(ngModel)]="searchCountry" 
                 (input)="search()" 
                 placeholder="Type a country..."
                 class="search-input">
        </div>

        <div class="search-group">
          <label>Search by Continent:</label>
          <select [(ngModel)]="searchContinent" (change)="search()" class="search-select">
            <option value="">All continents</option>
            <option *ngFor="let continent of continents" [value]="continent"> 
              {{continent}}
            </option>
          </select>
        </div>

        <div class="search-group">
          <label>Filter by Risk:</label>
          <select [(ngModel)]="searchRisk" (change)="search()" class="search-select">
            <option value="">All levels</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>

        <button (click)="clearSearch()" class="btn-clear">Clear search</button>
      </div>

      <div class="results-info">
        <p>Showing {{filteredTippingPoints.length}} of {{totalTippingPoints}} tipping points</p>
      </div>

      <div class="tipping-points-list">
        <div *ngFor="let tp of filteredTippingPoints; let i = index" class="tipping-point-card">
          <div class="card-header">
            <span class="badge-id">#{{tp.id}}</span>
            <span class="badge-risk" [style.background-color]="tp.risk | riskColor">
              {{tp.risk}}
            </span>
          </div>
          
          <img [src]="tp.image" [alt]="tp.name" class="image-tp">
          
          <div class="card-body">
            <h3>{{tp.name}}</h3>
            <p class="description">{{tp.description}}</p>
            
            <div class="geographic-info">
              <div class="info-item">
                <strong>Country:</strong> {{tp.country}}
              </div>
              <div class="info-item">
                <strong>Continent:</strong> {{tp.continent}}
              </div>
              <div class="info-item">
                <strong>Threshold:</strong> {{tp.temperature | temperatureFormat}}
              </div>
            </div>
          </div>
        </div>

        <div *ngIf="filteredTippingPoints.length === 0" class="no-results">
          <p>No results found</p>
        </div>
      </div>
    </div>
  `,
})
export class TippingPointsComponent {
  tippingPoints: TippingPoint[] = [];
  filteredTippingPoints: TippingPoint[] = [];
  continents: string[] = [];
  totalTippingPoints: number = 0;
  
  searchCountry: string = '';
  searchContinent: string = '';
  searchRisk: string = '';

  constructor(private tippingPointService: TippingPointService) {
    this.tippingPoints = this.tippingPointService.getTippingPoints();
    this.filteredTippingPoints = [...this.tippingPoints];
    this.continents = this.tippingPointService.getContinents();
    this.totalTippingPoints = this.tippingPoints.length;
  }

  search(): void {
    this.filteredTippingPoints = this.tippingPoints.filter(tp => {
      const matchesCountry = this.searchCountry === '' || 
        tp.country.toLowerCase().includes(this.searchCountry.toLowerCase());
      
      const matchesContinent = this.searchContinent === '' || 
        tp.continent === this.searchContinent;
      
      const matchesRisk = this.searchRisk === '' || 
        tp.risk === this.searchRisk;

      return matchesCountry && matchesContinent && matchesRisk;
    });
  }

  clearSearch(): void {
    this.searchCountry = '';
    this.searchContinent = '';
    this.searchRisk = '';
    this.filteredTippingPoints = [...this.tippingPoints];
  }
}