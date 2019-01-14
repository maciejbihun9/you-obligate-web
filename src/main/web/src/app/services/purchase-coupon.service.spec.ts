import { TestBed, inject } from '@angular/core/testing';

import { PurchaseCouponService } from './purchase-coupon.service';

describe('PurchaseCouponService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PurchaseCouponService]
    });
  });

  it('should be created', inject([PurchaseCouponService], (service: PurchaseCouponService) => {
    expect(service).toBeTruthy();
  }));
});
