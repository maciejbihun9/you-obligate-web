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
    this.obligationGroupsService.getObligationGroups().subscribe(
      obligationGroups => this.obligationGroups = obligationGroups
    );
  }

}
