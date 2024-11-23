import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherBoxComponent } from './weather-box/weather-box.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'weather-box', component: WeatherBoxComponent}
  ];
