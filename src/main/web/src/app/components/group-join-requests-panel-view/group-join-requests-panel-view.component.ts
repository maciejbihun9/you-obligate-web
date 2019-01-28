import { Component, OnInit } from '@angular/core';
import {GroupJoinRequest} from "../../models/group-join-request.model";

@Component({
  selector: 'app-group-join-requests-panel-view',
  templateUrl: './group-join-requests-panel-view.component.html',
  styleUrls: ['./group-join-requests-panel-view.component.css']
})
export class GroupJoinRequestsPanelViewComponent implements OnInit {

  groupJoinRequests: Array<GroupJoinRequest>;

  constructor(private groupJoinRequestService: GroupJoinRequestService) { }

  ngOnInit() {
    this.groupJoinRequestService.getAllGroupJoinRequests().subscribe(
      polledGroupJoinRequests => {
        this.groupJoinRequests = polledGroupJoinRequests;
      }
    )
  }

}
