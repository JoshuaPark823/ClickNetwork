import { GeolocationApi } from './../api/geolocation.api';
import { Injectable } from '@angular/core';
import { GeolocationData } from '../models/GeolocationData.model';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  private static _clientData: GeolocationData;

  constructor(
    private _geolocationApi: GeolocationApi
  ) { }

  public initializeClientData(): void {
    this._geolocationApi.getGeolocationData()
      .pipe(take(1))
      .subscribe(data => GeolocationService._clientData = data);
  }

  public getClientData() {
    return GeolocationService._clientData;
  }

}
