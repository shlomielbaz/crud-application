import { Component, Inject, OnInit } from '@angular/core';
import { WeatherForecast } from '../interfaces/weather-forecast.interface';
import { Observable } from 'rxjs';
import { WeatherForecastService } from '../services/weather-forecast.service';

@Component({
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  //public forecasts: WeatherForecast[] = [];
  forecasts$ = new Observable<WeatherForecast[]>();

  constructor(private service: WeatherForecastService) {
    
  }
  ngOnInit(): void {
    this.forecasts$ = this.service.load();
  }
}
