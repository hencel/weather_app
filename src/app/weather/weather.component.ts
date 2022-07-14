import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../shared/services/weather-api.service';
import { ApiResponse } from '../shared/model/ApiResponse';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  city: string = '';
  weatherData: ApiResponse;
  
  constructor(public api: WeatherApiService) { }

  ngOnInit(): void {
  }

  getCityFromSearcher(city: string): ApiResponse {
    let data = this.api.getWeatherFromApi(city);
    data.subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    })
    
    return this.weatherData;
  }

}
