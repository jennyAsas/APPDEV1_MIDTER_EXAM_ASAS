import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CityService {
  private savedCities: { name: string; temperature: number }[] = [];

  saveCity(city: { name: string; temperature: number }) {
    const exists = this.savedCities.find((c) => c.name.toLowerCase() === city.name.toLowerCase());
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
