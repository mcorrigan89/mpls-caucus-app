import 'leaflet';
import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';

import {CurrentAddressService} from '../../services/current-address/current-address.service';
import {PrecinctMapService} from '../../services/precinct-map/precinct-map.service';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit {

  public map;
  public sub: Subscription;
  public address;



  private mapData: Array<any> = [];

  constructor(
    private _currentAddress: CurrentAddressService) {
  }

  ngOnInit() {

    this.sub = this._currentAddress.currentAddress$.subscribe({
      next: (value) => {this.address = value; this.updateAddress()},
      error: (error) => console.log(error),
      complete: () => console.log('done')
    });

    this.map = L.map('map');
    this.map.setView([46.7296, -94.6859], 13);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 18,
    }).addTo(this.map);
  }

  private generatePrecinct(data: any) {
    L.geoJSON(data).addTo(this.map)
  }

  public updateAddress() {
    console.log(this.address.lat)
    console.log(this.address.lng)
    this.getPoint()
    //this.map.setView([this.address.lat, this.address.lng], 13);
    // this.map.panTo([56.7296, -94.6859]);
  }

  public getPoint() {
    this.mapData[0].forEach(point => console.log(point))
  }

}
