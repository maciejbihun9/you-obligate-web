import { TestBed, inject } from '@angular/core/testing';

import { ObligationGroupsService } from './obligation-groups.service';

describe('ObligationGroupsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObligationGroupsService]
    });
  });

  it('should be created', inject([ObligationGroupsService], (service: ObligationGroupsService) => {
    expect(service).toBeTruthy();
  }));
});
