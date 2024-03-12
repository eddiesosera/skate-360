// app.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Ng5SliderModule } from 'ng5-slider';
import { ConfigureToolOptionComponent } from './pages/craft/windows/configure-tool-option/configure-tool-option.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';

@NgModule({
  declarations: [
    // AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HomeComponent, RouterOutlet, NavbarComponent,
    // Ng5SliderModule,
    ConfigureToolOptionComponent
  ],
  exports: [
    ConfigureToolOptionComponent
  ],
  bootstrap: [
    // AppComponent
  ]
})
export class AppModule { }
