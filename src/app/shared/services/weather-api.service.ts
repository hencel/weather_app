import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  
  constructor(public http: HttpClient) { }

  getWeatherFromApi(city: string):Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=05d9fc302eab185f3419ebe3d60864d0`);
  }
}
