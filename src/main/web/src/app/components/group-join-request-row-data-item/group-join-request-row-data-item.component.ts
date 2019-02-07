import {Component, Input, OnInit} from '@angular/core';
import {GroupJoinRequestRowDataItem} from '../../models/group join request/group-request-row-data-item.model';
import {GroupJoinRequestStatus} from '../../models/group join request/group-join-request-status.model';

@Component({
  selector: '[app-group-join-request-row-data-item]',
  templateUrl: './group-join-request-row-data-item.component.html',
  styleUrls: ['./group-join-request-row-data-item.component.css']
})
export class GroupJoinRequestRowDataItemComponent implements OnInit {

  @Input() groupJoinRequestRowDataItem: GroupJoinRequestRowDataItem;

  groupJoinRequestStatuses: Array<string> = Object.keys(GroupJoinRequestStatus).filter(value => !isNaN(GroupJoinRequestStatus[value]));

  constructor() { }

  ngOnInit() {
  }

}
