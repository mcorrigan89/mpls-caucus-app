import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GoogleApiService {

  public api: string = 'https://maps.googleapis.com/maps/api/geocode/json?';

  constructor(private http: Http) { }

  public geocodeAddress(address: string): Observable<any> {
    return this.http.get(`${this.api}address=${address}`)
      .map(res => {return res.json()})
  }

}
