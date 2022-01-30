import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { catchError, tap } from "rxjs/operators";
import { throwError } from 'rxjs/internal/observable/throwError';
import { GeolocationData } from '../models/GeolocationData.model';


@Injectable({
    providedIn: 'root'
})
export class GeolocationApi {

    constructor(
        private _http: HttpClient
    ) {

    }

    public getGeolocationData() {
        return this._http.get<any>('https://geolocation-db.com/json/')
            .pipe(
                catchError(err => {
                    return throwError(err);
                })
            )
    }
}