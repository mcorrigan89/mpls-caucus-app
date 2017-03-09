import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from "rxjs";

import {AddressMap} from '../../classes/address.map';

@Injectable()
export class CurrentAddressService {

  private _currentAddressSource = new BehaviorSubject<AddressMap>(null);
  public currentAddress$: Observable<AddressMap> = this._currentAddressSource.asObservable();

  public setCurrentAddress(address: AddressMap) {
    console.log(address)
    this._currentAddressSource.next(address);
  }

}
