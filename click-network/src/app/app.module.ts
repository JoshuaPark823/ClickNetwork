import { GeolocationApi } from './api/geolocation.api';
import { GeolocationService } from './services/geolocation.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetworkCoreComponent } from './components/network-core/network-core.component';

@NgModule({
  declarations: [
    AppComponent,
    NetworkCoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GeolocationService,
    GeolocationApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
