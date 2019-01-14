import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PurchaseCouponService} from '../../services/purchase-coupon.service';
import {PurchaseCoupon} from '../../models/purchase-coupon.model';

@Component({
  selector: 'app-coupons-purchase-details-view',
  templateUrl: './coupons-purchase-details-view.component.html',
  styleUrls: ['./coupons-purchase-details-view.component.css']
})
export class CouponsPurchaseDetailsViewComponent implements OnInit {

  purchaseCoupon: PurchaseCoupon;

  public constructor(private route: ActivatedRoute,
                     private purchaseCouponService: PurchaseCouponService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const purchaseId = params['purchaseId'];
      this.purchaseCouponService.getPurchaseCouponById(purchaseId).subscribe(purchaseCoupon => {
        this.purchaseCoupon = purchaseCoupon;
      });
    });
  }

}
