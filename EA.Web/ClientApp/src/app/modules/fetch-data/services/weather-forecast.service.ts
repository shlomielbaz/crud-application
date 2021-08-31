import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherForecast } from '../interfaces/weather-forecast.interface';

@Injectable()
export class WeatherForecastService {
  constructor(private http: HttpClient) { }
  load(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>('/api/weatherforecast');
  }
}