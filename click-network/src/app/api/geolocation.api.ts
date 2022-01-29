import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GeolocationApi {

    constructor(
        private _http: HttpClient
    ) {

    }

    public getIPAddress() {
        try {
            return this._http.get("http://api.ipify.org/?format=json")
        }
        catch(e) {
            
        }
        
    }
}