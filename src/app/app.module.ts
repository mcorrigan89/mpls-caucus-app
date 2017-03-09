import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {GoogleApiService} from './services/google-api/google-api.service';
import {CurrentAddressService} from './services/current-address/current-address.service';
import {PrecinctMapService} from './services/precinct-map/precinct-map.service';

import { AppComponent } from './app.component';
import { MapComponentComponent } from './components/map-component/map-component.component';
import { PrecinctFinderComponent } from './components/precinct-finder/precinct-finder.component';
import { PrecinctComponent } from './components/precinct/precinct.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponentComponent,
    PrecinctFinderComponent,
    PrecinctComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    GoogleApiService,
    CurrentAddressService,
    PrecinctMapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
