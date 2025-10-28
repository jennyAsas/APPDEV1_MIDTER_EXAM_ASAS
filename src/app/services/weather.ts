import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { conf } from '../../conf';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '72b444ec4cb4cf6c102b2dbe1be1e76e'; // ← replace with your API key
  private baseUrl = 'https://api.weatherstack.com/current';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.baseUrl}?access_key=${this.apiKey}&query=${city}`;
    return this.http.get(url);
  }
}
