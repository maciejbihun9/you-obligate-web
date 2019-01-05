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

  private obligationGroupsCacheInterval;

  private updateCacheTimeLeft = 600;

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
    // start cache timer
    this.updateCache();
  }

  public updateCache() {
    this.obligationGroupsCacheInterval = setInterval(() => {
      if (this.updateCacheTimeLeft > 0) {
        this.updateCacheTimeLeft--;
      } else {
        this.updateCacheTimeLeft = 600;
        // update cache
        // get all cache keys
        this.obligationGroupsService.getObligationGroupsWithBonds(ObligationGroupsService.obligationGroupsCache.keys()).subscribe(
          obligationGroupsWithBonds => {
            obligationGroupsWithBonds.forEach(obligationGroupWithBonds => {
              ObligationGroupsService.obligationGroupsCache.set(obligationGroupWithBonds.id, obligationGroupWithBonds);
            });
          }
        );
      }
    }, 1000);
  }
}
