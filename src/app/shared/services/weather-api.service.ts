import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  
  constructor(public http: HttpClient) { }

  getWeatherFromApi(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=05d9fc302eab185f3419ebe3d60864d0`);
  }
}
