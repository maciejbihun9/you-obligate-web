import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponsPurchaseDetailsViewComponent } from './coupons-purchase-details-view.component';

describe('CouponsPurchaseDetailsViewComponent', () => {
  let component: CouponsPurchaseDetailsViewComponent;
  let fixture: ComponentFixture<CouponsPurchaseDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponsPurchaseDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponsPurchaseDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
