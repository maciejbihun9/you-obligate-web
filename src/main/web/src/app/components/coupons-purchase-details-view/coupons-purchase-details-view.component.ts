import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PurchaseCouponService} from '../../services/purchase-coupon.service';
import {PurchaseCoupon} from '../../models/purchase-coupon.model';
import {ObligationGroupsService} from '../../services/obligation-groups.service';

@Component({
  selector: 'app-coupons-purchase-details-view',
  templateUrl: './coupons-purchase-details-view.component.html',
  styleUrls: ['./coupons-purchase-details-view.component.css']
})
export class CouponsPurchaseDetailsViewComponent implements OnInit {

  purchaseCoupon: PurchaseCoupon;

  constructor(private route: ActivatedRoute,
                     private router: Router,
                     private purchaseCouponService: PurchaseCouponService) {}

  ngOnInit() {
    const purchaseId: number = +this.route.snapshot.paramMap.get('purchaseId');
    this.purchaseCouponService.getPurchaseCouponById(purchaseId).subscribe(purchaseCoupon => {
      this.purchaseCoupon = purchaseCoupon;
    });
  }

  public backToObligationGroupView() {
    const obligationGroupId = this.purchaseCoupon.bond.registeredServiceObligationStrategy.userAccountInObligationGroup.obligationGroup.id;
    this.router.navigate([`/obligation-groups/${obligationGroupId}`]);
  }

}
