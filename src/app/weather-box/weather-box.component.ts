import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../models/weather.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-box',
  imports: [FormsModule, CommonModule],
  templateUrl: './weather-box.component.html',
  styleUrl: './weather-box.component.css'
})
export class WeatherBoxComponent {
  weatherdata: WeatherData[] = [];
  cities: {location:string, id:string }[] = [];
  currentweather!: WeatherData;
  selectedCityId:string = ''

  constructor(
    private weatherService: WeatherService
  ) { }
  ngOnInit(): void {
    this.weatherService.getAllWeatherData().subscribe({
      next: (data: any) => {
        this.weatherdata = data;
        this.selectedCityId = this.weatherdata[0].id
        this.cities = this.weatherdata.map((item: any) => ({ location: item.location, id: item.id }));
        this.currentweather = this.weatherdata[0];
        console.log(this.cities);
      },
      error: (error) => {
        console.log("Something went wrong ", error);
      }
    })
  }

  onChangeCity():void{
    this.weatherService.getACityWeather(this.selectedCityId).subscribe({
      next: (data:WeatherData)=>{
        this.currentweather = data;
      }
    })
  }

}
