import { AlertComponent } from './../components/alert/alert.component';
import { GeolocationData } from './../models/GeolocationData.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  openAlert(data: GeolocationData): void {
    this._snackBar.openFromComponent(AlertComponent, {
      data: data,
      duration: 3000
    });
  }

}
