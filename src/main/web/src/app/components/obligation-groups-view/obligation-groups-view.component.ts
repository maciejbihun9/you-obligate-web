import { Component, OnInit } from '@angular/core';
import {ObligationGroupsService} from '../../services/obligation-groups.service';
import {ObligationGroup} from '../../models/obligation-group.model';

@Component({
  selector: 'app-obligation-groups-view',
  templateUrl: './obligation-groups-view.component.html',
  styleUrls: ['./obligation-groups-view.component.css']
})
export class ObligationGroupsViewComponent implements OnInit {

  public viewTitle = 'Obligation groups';

  public imageSize = 50;

  public obligationGroups: Array<ObligationGroup>;

  constructor(private obligationGroupsService: ObligationGroupsService) { }

  ngOnInit() {
    // fetch obligation groups data from cache is it was set before
    if (ObligationGroupsService.obligationGroupsCache !== undefined) {
      this.obligationGroups = ObligationGroupsService.obligationGroupsCache.values();
    } else {
      // if obligation groups cache is not set then make a http call to poll for it
      this.obligationGroupsService.getObligationGroups().subscribe(
        obligationGroups => {
          ObligationGroupsService.obligationGroupsCache = new Map();
          obligationGroups.forEach(obligationGroup => {
            ObligationGroupsService.obligationGroupsCache.set(obligationGroup.id, obligationGroup);
          });
          this.obligationGroups = obligationGroups;
        }
      );
    }
  }
}
