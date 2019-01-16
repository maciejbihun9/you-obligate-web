import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {PurchaseCoupon} from '../models/purchase-coupon.model';
import {Bond} from '../models/bond.model';

@Injectable()
export class PurchaseCouponService {

  constructor(private httpClient: HttpClient) { }

  public getPurchaseCouponById(purchaseCouponId: number): Observable<PurchaseCoupon> {
    /*const url = `/purchase-coupons/${purchaseCouponId}`;
    return this.httpClient.get<PurchaseCoupon>(url);*/
    const purchaseCouponsUrl = `/api/purchaseCoupons/1`;
    return this.httpClient.get<PurchaseCoupon>(purchaseCouponsUrl);
  }

}
