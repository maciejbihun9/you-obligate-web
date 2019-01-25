import { TestBed, inject } from '@angular/core/testing';

import { GroupJoinRequestService } from './group-join-request.service';

describe('GroupJoinRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupJoinRequestService]
    });
  });

  it('should be created', inject([GroupJoinRequestService], (service: GroupJoinRequestService) => {
    expect(service).toBeTruthy();
  }));
});
