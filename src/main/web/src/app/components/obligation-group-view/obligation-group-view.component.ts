import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ObligationGroupsService} from '../../services/obligation-groups.service';
import {ObligationGroup} from '../../models/obligation-group.model';

@Component({
  selector: 'app-obligation-group-view',
  templateUrl: './obligation-group-view.component.html',
  styleUrls: ['./obligation-group-view.component.css']
})
export class ObligationGroupViewComponent implements OnInit {

  public obligationGroupId: number;

  public obligationGroupBonds = undefined;

  public obligationGroupWithBonds: ObligationGroup = undefined;

  constructor(private route: ActivatedRoute,
              private obligationGroupsService: ObligationGroupsService,
              private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.obligationGroupId = +params['obligationGroupId'];
      this.obligationGroupsService.getBondsForObligationGroup(this.obligationGroupId).subscribe(obligationGroupBonds => {
        this.obligationGroupBonds = obligationGroupBonds;
      });
    });
  }

  joinGroup(){
    // redirect to another view where a user will be able to fill much needed fields
    this.router.navigate([`/obligation-groups/${this.obligationGroupId}/bonds/${this.bondId}/purchase-coupons/purchase-details`, {'purchaseId': response.body['id']}]);
  }
}
