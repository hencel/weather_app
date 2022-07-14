import { Component, Input } from '@angular/core';
import { ApiResponse } from '../../shared/model/ApiResponse';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @Input() weatherApiData: ApiResponse;


}
