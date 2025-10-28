import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityService } from '../../services/city';

@Component({
  selector: 'app-saved-cities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saved-cities.html',
})
export class SavedCitiesComponent implements OnInit {
  cities: { name: string; temperature: number }[] = [];

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.cities = this.cityService.getCities();
  }

  removeCity(name: string) {
    this.cityService.removeCity(name);
    this.cities = this.cityService.getCities();
  }
}
