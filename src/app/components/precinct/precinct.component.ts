import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-precinct',
  templateUrl: './precinct.component.html',
  styleUrls: ['./precinct.component.scss']
})
export class PrecinctComponent {

  @Input() precinct;
  @Input() address;
  @Input() event;

  public showInfo: boolean = false;

  constructor() {
  }

  public showExtraPrecinctInfo() {
    this.showInfo = !this.showInfo;
  }

}
