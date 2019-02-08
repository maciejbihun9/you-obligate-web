import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GroupJoinRequestService} from "../../services/group-join-request.service";
import {GroupJoinRequest} from "../../models/group join request/group-join-request.model";

@Component({
  selector: 'app-create-obligation-strategy-view',
  templateUrl: './create-obligation-strategy-view.component.html',
  styleUrls: ['./create-obligation-strategy-view.component.css']
})
export class CreateObligationStrategyViewComponent implements OnInit {

  @Input() groupJoinRequestId: number = 0;

  groupJoinRequest: GroupJoinRequest;

  constructor(private groupJoinRequestService: GroupJoinRequestService) { }

  ngOnInit() {
    this.groupJoinRequestService.getGroupJoinRequest(this.groupJoinRequestId).subscribe(groupJoinRequest => {
      this.groupJoinRequest = groupJoinRequest;
    });
  }

  createObligationStrategy(){

  }

}
