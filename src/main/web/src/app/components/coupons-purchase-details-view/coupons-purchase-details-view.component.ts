import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupons-purchase-details-view',
  templateUrl: './coupons-purchase-details-view.component.html',
  styleUrls: ['./coupons-purchase-details-view.component.css']
})
export class CouponsPurchaseDetailsViewComponent implements OnInit {

  purchasedAmountOfUnits: number;

  currencyShortcutName: string;

  totalCost: number;

  constructor() { }

  ngOnInit() {

    // show how many units has been bought
    // show currency shortcut

  }

}
