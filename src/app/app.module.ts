import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './weather/header/header.component';
import { MainComponent } from './weather/main/main.component';
import { FooterComponent } from './weather/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherComponent } from './weather/weather.component';
import { WeatherApiService } from './shared/services/weather-api.service';
import { DailyWeatherComponent } from './weather/main/daily-weather/daily-weather.component';
import { WeeklyWeatherComponent } from './weather/main/weekly-weather/weekly-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    WeatherComponent,
    DailyWeatherComponent,
    WeeklyWeatherComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
