import { Component, OnInit } from '@angular/core';
import { WeatherBoxComponent } from '../weather-box/weather-box.component';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  imports: [
    WeatherBoxComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  weatherdata:any;
  constructor(
    private weatherService: WeatherService
  )
  {}
  ngOnInit():void{
    this.weatherService.getAllWeatherData().subscribe(
      data =>{
        this.weatherdata = data;
        console.log(this.weatherdata)
      },
      error=>{
        console.log("Something went wrong: ",error)
      }
    )
  }
}
