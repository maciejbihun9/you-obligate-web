import { Component, OnInit } from '@angular/core';
import {UserObligationGroupAccount} from '../../models/user-obligation-group-account.model';
import {UserObligationGroupAccountService} from '../../services/user-obligation-group-account.service';

@Component({
  selector: 'app-obligation-groups-panel',
  templateUrl: './obligation-groups-panel.component.html',
  styleUrls: ['./obligation-groups-panel.component.css']
})
export class ObligationGroupsPanelComponent implements OnInit {

  public panelTitle = 'Obligation groups';

  userObligationGroupAccounts: Array<UserObligationGroupAccount> = [];

  constructor(private userObligationGroupAccountService: UserObligationGroupAccountService) { }

  ngOnInit() {
    this.userObligationGroupAccountService.getUserObligationGroupAccounts().subscribe(
      userObligationGroupAccounts => {
        this.userObligationGroupAccounts = userObligationGroupAccounts;
      }
    );
  }

}
