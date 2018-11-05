import { TestBed, inject } from '@angular/core/testing';

import { UserObligationGroupAccountServiceService } from './user-obligation-group-account.service';

describe('UserObligationGroupAccountServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserObligationGroupAccountServiceService]
    });
  });

  it('should be created', inject([UserObligationGroupAccountServiceService], (service: UserObligationGroupAccountServiceService) => {
    expect(service).toBeTruthy();
  }));
});
