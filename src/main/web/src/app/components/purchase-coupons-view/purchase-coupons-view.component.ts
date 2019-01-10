import { Component, OnInit } from '@angular/core';
import {BondService} from '../../services/bond.service';
import {ActivatedRoute} from '@angular/router';
import {Bond} from '../../models/bond.model';
import {ObligationGroupsService} from '../../services/obligation-groups.service';
import {ObligationGroup} from '../../models/obligation-group.model';

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

  constructor(private route: ActivatedRoute,
              private bondService: BondService,
              private obligationGroupService: ObligationGroupsService) {
  }

  ngOnInit() {
    // poll for logged in user

    this.route.params.subscribe(params => {
      this.obligationGroupId = +params['obligationGroupId'];
      this.bondId = +params['bondId'];

      this.obligationGroupService.getObligationGroup(this.obligationGroupId).subscribe(obligationGroup => {
        this.obligationGroup = obligationGroup;
      });

      this.bondService.getBond(this.bondId).subscribe(bond => {
        this.bond = bond;
      });
    });
  }
}
