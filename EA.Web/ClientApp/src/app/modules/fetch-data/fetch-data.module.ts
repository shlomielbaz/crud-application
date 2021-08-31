
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchDataRoutesModule } from './fetch-data-routes.module';
import { WeatherForecastService } from './services/weather-forecast.service';


@NgModule({
  declarations: [
    
    
  ],
  imports: [
    CommonModule,
    FetchDataRoutesModule
  ],
  exports: [
    CommonModule,
  ],
  providers: [WeatherForecastService]
})
export class FetchDataModule { }
