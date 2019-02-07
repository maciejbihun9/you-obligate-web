import { TestBed } from '@angular/core/testing';

import { RegisteredServiceObligationStrategyService } from './registered-service-obligation-strategy.service';

describe('RegisteredServiceObligationStrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisteredServiceObligationStrategyService = TestBed.get(RegisteredServiceObligationStrategyService);
    expect(service).toBeTruthy();
  });
});
