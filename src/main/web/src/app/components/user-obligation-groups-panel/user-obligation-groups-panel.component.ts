import { Component, OnInit } from '@angular/core';
import {UserAccountInObligationGroup} from '../../models/user-account-in-obligation-group.model';
import {UserAccountInObligationGroupService} from '../../services/user-account-in-obligation-group.service';

@Component({
  selector: 'app-obligation-groups-panel',
  templateUrl: './user-obligation-groups-panel.component.html',
  styleUrls: ['./user-obligation-groups-panel.component.css']
})
export class UserObligationGroupsPanelComponent implements OnInit {

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
