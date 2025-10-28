import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather';
import { CityService } from '../../services/city';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
})
export class HomeComponent {
  cityName: string = '';
  weatherData: any = null;
  errorMessage: string = '';

  constructor(
    private weatherService: WeatherService,
    private cityService: CityService,
  ) {}

  onSubmit() {
    if (!this.cityName.trim()) {
      this.errorMessage = 'Please enter a city name.';
      return;
    }

    this.weatherService.getWeather(this.cityName).subscribe({
      next: (data) => {
        this.weatherData = data.current;
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = 'Unable to fetch weather data.';
      },
    });
  }

  saveCity() {
    if (this.weatherData) {
      this.cityService.saveCity({
        name: this.cityName,
        temperature: this.weatherData.temperature,
      });
      alert(`${this.cityName} saved successfully!`);
    }
  }
}
