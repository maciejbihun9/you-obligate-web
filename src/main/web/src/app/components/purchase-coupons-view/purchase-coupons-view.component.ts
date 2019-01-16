import { Component, OnInit } from '@angular/core';
import {BondService} from '../../services/bond.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Bond} from '../../models/bond.model';
import {ObligationGroupsService} from '../../services/obligation-groups.service';
import {ObligationGroup} from '../../models/obligation-group.model';
import {UserRegisteredServiceEntity} from '../../models/user-registered-service-entity.model';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';
import {UserObligationGroupAccountService} from '../../services/user-obligation-group-account.service';
import {MarketTransactionsService} from '../../services/market-transactions.service';
import {PurchaseDataObjectModel} from '../../models/purchase-data-object.model';
import {PurchaseCoupon} from '../../models/purchase-coupon.model';

@Component({
  selector: 'app-purchase-coupons-view',
  templateUrl: './purchase-coupons-view.component.html',
  styleUrls: ['./purchase-coupons-view.component.css']
})
export class PurchaseCouponsViewComponent implements OnInit {

  public bondId = undefined;

  public obligationGroupId = undefined;

  public bond: Bond;

  public obligationGroup: ObligationGroup;

  public loggedInUser: User;

  public amountOfUnitsToBuy = 1;

  public totalCost;

  public userAccountBalanceInObligationGroup: number = undefined;

  makePurchaseButtonEnabled = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bondService: BondService,
              private userService: UserService,
              private userObligationGroupAccountService: UserObligationGroupAccountService,
              private obligationGroupService: ObligationGroupsService,
              private marketTransactionsService: MarketTransactionsService) {
  }

  ngOnInit() {
    // poll for logged in user
    this.userService.getLoggedInUser().subscribe(user => {
      this.loggedInUser = user;
    });

    this.route.params.subscribe(params => {
      this.obligationGroupId = +params['obligationGroupId'];
      this.bondId = +params['bondId'];

      this.userObligationGroupAccountService.getUserAccountBalanceInGivenObligationGroup(this.obligationGroupId).subscribe(userAccountBalanceInObligationGroup => {
        this.userAccountBalanceInObligationGroup = userAccountBalanceInObligationGroup;
      });

      this.obligationGroupService.getObligationGroup(this.obligationGroupId).subscribe(obligationGroup => {
        this.obligationGroup = obligationGroup;
      });

      this.bondService.getBond(this.bondId).subscribe(bond => {
        this.bond = bond;
      });
    });
    this.computeTotalCost();
  }

  public computeTotalCost() {
    // check if this is a number
    this.makePurchaseButtonEnabled = true;
    if (isNaN(this.amountOfUnitsToBuy)) {
      console.log('This is not a number');
      return;
    }
    if (this.amountOfUnitsToBuy > this.bond.numberOfUnitsToServe) {
      console.log('There is not enough number of units to serve');
      return;
    }
    console.log('This is a number: ' + this.amountOfUnitsToBuy);
    const totalCost = this.bond.unitOfWorkCost * this.amountOfUnitsToBuy;
    if (totalCost > this.userAccountBalanceInObligationGroup) {
      console.log('You can not make a purchase');
      return;
    }
    // enable make purchase button if numbers are ok
    this.makePurchaseButtonEnabled = false;
    this.totalCost = totalCost;
  }

  public makeCouponsPurchase() {
    const purchaseObject: PurchaseDataObjectModel = {bond: this.bond, amountOfUnitsToBuy: this.amountOfUnitsToBuy};
    this.marketTransactionsService.makeCouponsPurchase(purchaseObject).subscribe(response => {
      if (response.status === 200) {
        console.log('Purchase was made');
        // redirect to a view with purchase details
        // send only purchased coupon id and poll for the data using this exact idresponse.body;
        const navigationExtras: NavigationExtras = {
          queryParams: {
            'purchaseId': response.body['id']
          }
        };
        debugger;
        this.router.navigate([`/obligation-groups/${this.obligationGroupId}/bonds/${this.bondId}/purchase-coupons/purchase-details`, {'purchaseId': response.body['id']}]);
        return;
      }
      if (response.status === 409) {
        // show some kind of a message
        console.log('The system could not make a purchase');
        // there was a conflict\
        this.bond = <Bond>response.body;
        return;
      }

    });
  }

}
