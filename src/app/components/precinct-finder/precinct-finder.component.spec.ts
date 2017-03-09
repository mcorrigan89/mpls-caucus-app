import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecinctFinderComponent } from './precinct-finder.component';

describe('PrecinctFinderComponent', () => {
  let component: PrecinctFinderComponent;
  let fixture: ComponentFixture<PrecinctFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecinctFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecinctFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
