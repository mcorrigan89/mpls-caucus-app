import { TestBed, inject } from '@angular/core/testing';

import { CurrentAddressService } from './current-address.service';

describe('CurrentAddressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentAddressService]
    });
  });

  it('should ...', inject([CurrentAddressService], (service: CurrentAddressService) => {
    expect(service).toBeTruthy();
  }));
});
