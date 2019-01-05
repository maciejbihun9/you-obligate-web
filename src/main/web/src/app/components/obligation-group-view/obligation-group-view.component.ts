import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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

  constructor(private route: ActivatedRoute, private obligationGroupsService: ObligationGroupsService) {}

  ngOnInit() {
    // obligation group bonds were already set then get it from cache
    if (ObligationGroupsService.obligationGroupsCache.get(this.obligationGroupId).issuedBonds !== undefined) {
      this.obligationGroupBonds = ObligationGroupsService.obligationGroupsCache.get(this.obligationGroupId).issuedBonds;
    } else {
      // bonds were not set
      this.route.params.subscribe(params => {
        this.obligationGroupId = +params['obligationGroupId'];
        this.obligationGroupsService.getBondsForObligationGroup(this.obligationGroupId).subscribe(obligationGroupBonds => {
          this.obligationGroupBonds = obligationGroupBonds;
          // set cache obligation group bonds
          ObligationGroupsService.obligationGroupsCache.get(this.obligationGroupId).issuedBonds = obligationGroupBonds;
        });
      });
    }
  }
}
