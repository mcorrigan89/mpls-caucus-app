import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import inside from 'point-in-polygon';

import {eventData} from './constants/eventbrite';
import {CurrentAddressService} from './services/current-address/current-address.service';
import {PrecinctMapService} from './services/precinct-map/precinct-map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  public sub: Subscription;
  public address;

  private precinctList: Array<string> = [
    'mn-cd1-precincts.json',
    'mn-cd2-precincts.json',
    'mn-cd3-precincts.json',
    'mn-cd4-precincts.json',
    'mn-cd5-precincts.json',
    'mn-cd6-precincts.json',
    'mn-cd7-precincts.json',
    'mn-cd8-precincts.json'
  ];

  public mapData = [];
  public precinct;
  public event;

  constructor(
    private _precinctMap: PrecinctMapService,
    private _currentAddress: CurrentAddressService) {}

  ngOnInit() {
    this.sub = this._currentAddress.currentAddress$.subscribe({
      next: (data) => {this.address = data, this.getPrecinct()},
      error: (error) => console.log(error)
    });

    this.precinctList.forEach((map) => {
      this._precinctMap.getPrecinctData(map)
        .subscribe(res => {this.mapData.push(res.features)});
    });

  }

  public getPrecinct() {
    this.mapData.map(data => {
      data.map(coords => {
        if (inside([this.address.lng, this.address.lat], coords.geometry.coordinates[0])) {
          console.log(coords.properties)
          this.precinct = coords.properties;
          this.event = eventData[this.precinct.Precinct];
        }
      })
    })
  }
}
