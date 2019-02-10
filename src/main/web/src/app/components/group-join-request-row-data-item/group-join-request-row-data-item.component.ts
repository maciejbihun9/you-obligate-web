import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GroupJoinRequestRowDataItem} from '../../models/group join request/group-request-row-data-item.model';
import {GroupJoinRequestStatus} from '../../models/group join request/group-join-request-status.model';
import {Router} from "@angular/router";

@Component({
  selector: '[app-group-join-request-row-data-item]',
  templateUrl: './group-join-request-row-data-item.component.html',
  styleUrls: ['./group-join-request-row-data-item.component.css']
})
export class GroupJoinRequestRowDataItemComponent implements OnInit {

  @Input() groupJoinRequestRowDataItem: GroupJoinRequestRowDataItem;

  @Output() groupRequestStatusChanged = new EventEmitter<any>();

  groupJoinRequestStatuses: Array<string> = Object.keys(GroupJoinRequestStatus).filter(value => !isNaN(GroupJoinRequestStatus[value]));

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onGroupJoinRequestStatusChange(element: GroupJoinRequestRowDataItem) {
    this.groupRequestStatusChanged.next(element);
  }

  public createObligationStrategy() {
    console.log('createObligationStrategy');
    // navigate to create obligation strategy view
    this.router.navigate([`/obligation-groups/${obligationGroupId}/create-obligation-strategy`]);
  }

}
