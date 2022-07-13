import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../shared/services/weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherData: string = '';
  
  constructor(public api: WeatherApiService) { }

  ngOnInit(): void {
  }

  getCityFromSearcher(city: string) {
    this.weatherData = city;
    let data = this.api.getWeatherFromApi(city);
    data.subscribe(data => {
      
    })
  }

}
