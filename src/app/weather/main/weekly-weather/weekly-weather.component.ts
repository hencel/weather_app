import { Component, Input, OnInit } from '@angular/core';
import { ApiResponse } from '../../../shared/model/ApiResponse';

@Component({
  selector: 'app-weekly-weather',
  templateUrl: './weekly-weather.component.html',
  styleUrls: ['./weekly-weather.component.scss']
})
export class WeeklyWeatherComponent implements OnInit {

  @Input() weeklyData: ApiResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
