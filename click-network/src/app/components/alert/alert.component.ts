import { Component, Inject, OnInit } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { GeolocationData } from 'src/app/models/GeolocationData.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: GeolocationData
  ) { }

  ngOnInit(): void {
  }

}
