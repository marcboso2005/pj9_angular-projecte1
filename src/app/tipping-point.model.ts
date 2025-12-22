export class TippingPoint {
  id: number;
  name: string;
  description: string;
  image: string;
  country: string;
  continent: string;
  risk: 'Low' | 'Medium' | 'High' | 'Critical';
  temperature: number; 
  
  constructor(
    id: number,
    name: string,
    description: string,
    image: string,
    country: string,
    continent: string,
    risk: 'Low' | 'Medium' | 'High' | 'Critical',
    temperature: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.country = country;
    this.continent = continent;
    this.risk = risk;
    this.temperature = temperature;
  }
}