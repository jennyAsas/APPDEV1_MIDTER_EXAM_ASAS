// src/app/home/home.component.ts
import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather';
import { CityService } from '../../services/city'
import { FormsModule } from '@angular/forms'; // ✅ Add this
import { CommonModule } from '@angular/common'; // ✅ Add this

@Component({
  selector: 'app-home',
  standalone: true, // ✅ important for Angular 20
  imports: [CommonModule, FormsModule], // ✅ Add this line
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  cityName = '';
  weatherData: any;
  errorMessage = '';

  constructor(
    private weatherService: WeatherService,
    private cityService: CityService,
  ) {}

  searchWeather() {
    if (!this.cityName.trim()) {
      this.errorMessage = 'Please enter a city name.';
      return;
    }

    this.weatherService.getWeather(this.cityName).subscribe({
      next: (data) => {
        if (data.success === false) {
          this.errorMessage = 'City not found.';
          this.weatherData = null;
        } else {
          this.weatherData = data;
          this.errorMessage = '';
        }
      },
      error: () => {
        this.errorMessage = 'Error fetching weather data.';
      },
    });
  }

  saveCity() {
    if (this.weatherData) {
      const city = {
        name: this.weatherData.location.name,
        temperature: this.weatherData.current.temperature,
      };
      this.cityService.addCity(city);
      alert(`${city.name} saved!`);
    }
  }
}
