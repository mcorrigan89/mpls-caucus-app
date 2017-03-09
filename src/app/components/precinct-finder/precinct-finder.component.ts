import { Component, OnInit } from '@angular/core';

import {AddressMap} from '../../classes/address.map';
import {GoogleApiService} from '../../services/google-api/google-api.service';
import {CurrentAddressService} from '../../services/current-address/current-address.service';

interface PrecinctForm {
  address1: string,
  address2: string,
  city: string;
  zip: number;
}

@Component({
  selector: 'app-precinct-finder',
  templateUrl: './precinct-finder.component.html',
  styleUrls: ['./precinct-finder.component.scss']
})
export class PrecinctFinderComponent implements OnInit {

  public form: PrecinctForm = {
    address1: '',
    address2: '',
    city: '',
    zip: null
  };

  public submitted: boolean = false;

  constructor(
    private _googleApi: GoogleApiService,
    private _currentAddress: CurrentAddressService
  ) {

  }

  ngOnInit() {
  }

  public onSubmit() {
    this.submitted = true;
    let address;
    if (this.form.address2) {
      address = `${this.form.address1} ${this.form.address2} ${this.form.city} ${this.form.zip}`;
    } else {
      address = `${this.form.address1} ${this.form.city} ${this.form.zip}`;
    }
    this._googleApi.geocodeAddress(address)
      .subscribe(res => this.createAddressMap(res))
  }

  public retry() {
    this.submitted = false;
  }

  private createAddressMap = (addressResponse: any) => {
    let newAddress;
    if (addressResponse.status === "ZERO_RESULTS") {
      newAddress = new AddressMap({address: "", lat: 0, lng: 0});
    } else {

      let address = addressResponse.results[0].formatted_address;
      let lat = addressResponse.results[0].geometry.location.lat;
      let lng = addressResponse.results[0].geometry.location.lng;
      newAddress = new AddressMap({address, lat, lng});
    }
      this._currentAddress.setCurrentAddress(newAddress);

  }

}
