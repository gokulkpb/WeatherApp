import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private endpoint:string = "http://localhost:3000";
  private url = this.endpoint + "/weather"

  constructor(
    private httpClient:HttpClient
  ) { }

  getAllWeatherData(): Observable<any>{
    return this.httpClient.get<WeatherData[]>(this.url)
  }

  getACityWeather(id:string): Observable<any>{
    return this.httpClient.get<WeatherData>(this.url + "/" + id);
  }
}
