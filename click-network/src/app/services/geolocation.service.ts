import { GeolocationApi } from './../api/geolocation.api';
import { Injectable } from '@angular/core';
import { GeolocationData } from '../models/GeolocationData.model';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  private static _clientData: GeolocationData = {
    countryCode: '',
    countryName: '',
    city: '',
    postal: 0,
    latitude: 0,
    IPv4: '',
    state: ''
  };

  constructor(
    private _geolocationApi: GeolocationApi
  ) { }

  public initializeClientData(): void {
    this._geolocationApi.getGeolocationData()
      .pipe(take(1))
      .subscribe(data => {
        GeolocationService._clientData.IPv4 = data.IPv4;
        GeolocationService._clientData.countryName = data.country_name;
        GeolocationService._clientData.countryCode = data.country_code;
        GeolocationService._clientData.state = data.state;
        GeolocationService._clientData.city = data.city;
      });
  }

  public getClientData() {
    return GeolocationService._clientData;
  }

}
