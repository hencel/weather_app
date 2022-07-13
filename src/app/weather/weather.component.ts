import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../shared/services/weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  currentCity: string = '';
  
  constructor(public api: WeatherApiService) { }

  ngOnInit(): void {
  }

  getCityFromSearcher(city: string) {
    this.currentCity = city;
    let data = this.api.getWeatherFromApi(city);
    data.subscribe(data => {
      console.log(data);
    })
  }

}
