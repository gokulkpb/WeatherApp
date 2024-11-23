import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeatherBoxComponent } from '../weather-box/weather-box.component';
import { AppComponent } from '../app.component';

const routes :Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: AppComponent},
  {path: 'weather-box', component: WeatherBoxComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
