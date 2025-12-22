import { Injectable } from '@angular/core';
import { TippingPoint } from './tipping-point.model';

@Injectable({
  providedIn: 'root'
})
export class TippingPointService {
  
  private tippingPoints: TippingPoint[] = [
    new TippingPoint(
      1,
      'Greenland Ice Sheet',
      'Accelerated ice loss in Greenland could raise sea levels by up to 7 meters. The process has already begun and may be irreversible.',
      'https://ichef.bbci.co.uk/images/ic/480xn/p0m3j60x.jpg.webp',
      'Greenland',
      'North America',
      'Critical',
      1.5
    ),
    new TippingPoint(
      2,
      'Amazon Rainforest',
      'Deforestation and warming could turn the Amazon into savanna, releasing large amounts of CO2 and losing biodiversity.',
      'https://ichef.bbci.co.uk/news/480/cpsprodpb/6340/production/_123580452_amazondeforestation_gettyimages-90111445.jpg.webp',
      'Brazil',
      'South America',
      'High',
      2.0
    ),
    new TippingPoint(
      3,
      'Atlantic Meridional Overturning Circulation',
      'The shutdown of the Atlantic circulation could cause radical climate changes in Europe and North America.',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
      'North Atlantic',
      'Atlantic Ocean',
      'High',
      1.8
    ),
    new TippingPoint(
      4,
      'Siberian Permafrost',
      'Permafrost thawing can release methane and CO2, exponentially accelerating global climate change.',
      'https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?w=400',
      'Russia',
      'Asia',
      'Critical',
      1.2
    ),
    new TippingPoint(
      5,
      'Coral Reefs',
      'The Great Barrier Reef is disappearing due to ocean acidification and water warming.',
      'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400',
      'Australia',
      'Oceania',
      'High',
      1.5
    ),
    new TippingPoint(
      6,
      'West Antarctic Ice Sheet',
      'The collapse of the West Antarctic ice sheet could raise sea levels by more than 3 meters.',
      'https://images.unsplash.com/photo-1457269449834-928af64c684d?w=400',
      'Antarctica',
      'Antarctica',
      'Critical',
      2.0
    ),
    new TippingPoint(
      7,
      'Boreal Forests',
      'Boreal forests in Canada and Siberia are at risk from fires and pests, shifting from carbon sinks to emitters.',
      'https://images.unsplash.com/photo-1511497584788-876760111969?w=400',
      'Canada',
      'North America',
      'Medium',
      2.5
    ),
    new TippingPoint(
      8,
      'West African Monsoon',
      'Changes in the African monsoon can cause severe droughts and desertification in the Sahel region.',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400',
      'Mali',
      'Africa',
      'High',
      2.0
    )
  ];

  getTippingPoints(): TippingPoint[] {
    return this.tippingPoints;
  }

  getTippingPointById(id: number): TippingPoint | undefined {
    return this.tippingPoints.find(tp => tp.id === id);
  }

  getTippingPointsByCountry(country: string): TippingPoint[] {
    return this.tippingPoints.filter(tp => 
      tp.country.toLowerCase().includes(country.toLowerCase())
    );
  }

  getTippingPointsByContinent(continent: string): TippingPoint[] {
    return this.tippingPoints.filter(tp => 
      tp.continent.toLowerCase().includes(continent.toLowerCase())
    );
  }

  getContinents(): string[] {
    const continents = new Set(this.tippingPoints.map(tp => tp.continent));
    return Array.from(continents).sort();
  }

  getCountries(): string[] {
    const countries = new Set(this.tippingPoints.map(tp => tp.country));
    return Array.from(countries).sort();
  }
}