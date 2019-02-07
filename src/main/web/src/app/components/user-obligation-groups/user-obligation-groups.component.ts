import { Component, OnInit } from '@angular/core';
import {UserAccountInObligationGroup} from '../../models/user-account-in-obligation-group.model';
import {UserAccountInObligationGroupService} from '../../services/user-account-in-obligation-group.service';

/**
 * Displays given user obligation groups details.
 */
@Component({
  selector: 'app-obligation-groups-panel',
  templateUrl: './user-obligation-groups.component.html',
  styleUrls: ['./user-obligation-groups.component.css']
})
export class UserObligationGroupsComponent implements OnInit {

  public panelTitle = 'Your obligation groups';

  userObligationGroupAccounts: Array<UserAccountInObligationGroup> = [];

  constructor(private userObligationGroupAccountService: UserAccountInObligationGroupService) { }

  ngOnInit() {
    this.userObligationGroupAccountService.getUserAccountsInObligationGroup().subscribe(
      userObligationGroupAccounts => {
        this.userObligationGroupAccounts = userObligationGroupAccounts;
      }
    );
  }


}
