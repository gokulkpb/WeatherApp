import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private api_url:string = "http://localhost:3000/weather/1";

  constructor(
    private httpClient:HttpClient
  ) { }

  getAllWeatherData(): Observable<any>{
    return this.httpClient.get<any>(this.api_url)
  }
}
