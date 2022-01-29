import { GeolocationService } from './../../services/geolocation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network-core',
  templateUrl: './network-core.component.html',
  styleUrls: ['./network-core.component.scss']
})
export class NetworkCoreComponent implements OnInit {

  constructor(
    private _geolocationService: GeolocationService
  ) { }

  ngOnInit(): void {
    this._geolocationService.initializeClientData();
  }

  onClick(): void {
    let data = this._geolocationService.getClientData();
    console.log(data);
  }

}
