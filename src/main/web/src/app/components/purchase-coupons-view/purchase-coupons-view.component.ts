import { Component, OnInit } from '@angular/core';
import {BondService} from '../../services/bond.service';
import {ActivatedRoute} from '@angular/router';
import {Bond} from '../../models/bond.model';
import {ObligationGroupsService} from '../../services/obligation-groups.service';
import {ObligationGroup} from '../../models/obligation-group.model';
import {UserRegisteredServiceEntity} from '../../models/user-registered-service-entity.model';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';
import {UserObligationGroupAccountService} from '../../services/user-obligation-group-account.service';

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

  constructor(private route: ActivatedRoute,
              private bondService: BondService,
              private userService: UserService,
              private userObligationGroupAccountService: UserObligationGroupAccountService,
              private obligationGroupService: ObligationGroupsService) {
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
  }

  public computeTotalCost() {
    // check if this is a number
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
    }
    this.totalCost = totalCost;
  }
}
