import { Component, Input, OnInit } from '@angular/core';
import { ApiResponse } from '../../shared/model/ApiResponse';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @Input() weatherApiData: ApiResponse;

  overallData: Array<ApiResponse> = [];

  OnInit() {
    this.weatherApiData.list.forEach(element => {

    })
  }


}
