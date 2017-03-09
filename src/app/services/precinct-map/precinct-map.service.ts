import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PrecinctMapService {

  constructor(private http: Http) { }

  public getPrecinctData(mapId: string): Observable<any> {
    return this.http.get(`assets/maps/${mapId}`)
      .map(res => {return res.json()})
  }

}
