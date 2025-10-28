// src/app/services/city.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private savedCities: { name: string; temperature: number }[] = [];

  addCity(city: { name: string; temperature: number }) {
    const exists = this.savedCities.find((c) => c.name === city.name);
    if (!exists) {
      this.savedCities.push(city);
    }
  }

  getCities() {
    return this.savedCities;
  }

  removeCity(name: string) {
    this.savedCities = this.savedCities.filter((c) => c.name !== name);
  }
}
