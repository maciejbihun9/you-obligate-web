import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCouponsViewComponent } from './purchase-coupons-view.component';

describe('PurchaseCouponsViewComponent', () => {
  let component: PurchaseCouponsViewComponent;
  let fixture: ComponentFixture<PurchaseCouponsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseCouponsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseCouponsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
