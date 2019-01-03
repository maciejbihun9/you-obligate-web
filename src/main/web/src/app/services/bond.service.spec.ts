import { TestBed, inject } from '@angular/core/testing';

import { BondService } from './bond.service';

describe('BondService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BondService]
    });
  });

  it('should be created', inject([BondService], (service: BondService) => {
    expect(service).toBeTruthy();
  }));
});
