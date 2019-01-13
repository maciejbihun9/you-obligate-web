import { TestBed, inject } from '@angular/core/testing';

import { MarketTransactionsService } from './market-transactions.service';

describe('MarketTransactionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarketTransactionsService]
    });
  });

  it('should be created', inject([MarketTransactionsService], (service: MarketTransactionsService) => {
    expect(service).toBeTruthy();
  }));
});
