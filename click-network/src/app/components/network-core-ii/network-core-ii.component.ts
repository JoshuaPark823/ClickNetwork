import { GeolocationData } from './../../models/GeolocationData.model';
import { AlertService } from './../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-network-core-ii',
  templateUrl: './network-core-ii.component.html',
  styleUrls: ['./network-core-ii.component.scss']
})
export class NetworkCoreIiComponent implements OnInit {

  constructor(
    private _geolocationService: GeolocationService,
    private _alertService: AlertService
  ) { }

  ngOnInit(): void {
    this._geolocationService.initializeClientData();
  }

  onClick(): void {
    let data = this._geolocationService.getClientData();

    if (data) {
      this._alertService.openAlert(data);
    }

  }

}
