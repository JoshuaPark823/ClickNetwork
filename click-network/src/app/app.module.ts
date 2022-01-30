import { GeolocationApi } from './api/geolocation.api';
import { GeolocationService } from './services/geolocation.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetworkCoreComponent } from './components/network-core/network-core.component';
import { NetworkCoreIiComponent } from './components/network-core-ii/network-core-ii.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NetworkCoreComponent,
    NetworkCoreIiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    GeolocationService,
    GeolocationApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
