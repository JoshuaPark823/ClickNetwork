import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-network-core-ii',
  templateUrl: './network-core-ii.component.html',
  styleUrls: ['./network-core-ii.component.scss']
})
export class NetworkCoreIiComponent implements OnInit {

  constructor(
    private _geolocationService: GeolocationService
  ) { }

  ngOnInit(): void {
    this._geolocationService.initializeClientData();
  }

  onClick(): void {
    // let data = this._geolocationService.getClientData();
    // console.log(data);
  }

}
