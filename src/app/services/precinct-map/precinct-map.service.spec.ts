import { TestBed, inject } from '@angular/core/testing';

import { PrecinctMapService } from './precinct-map.service';

describe('PrecinctMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrecinctMapService]
    });
  });

  it('should ...', inject([PrecinctMapService], (service: PrecinctMapService) => {
    expect(service).toBeTruthy();
  }));
});
