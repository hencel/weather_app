import { Component, Input, OnInit } from '@angular/core';
import { ApiResponse } from '../../../shared/model/ApiResponse';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss']
})
export class DailyWeatherComponent implements OnInit {

  @Input() dailyData: ApiResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
