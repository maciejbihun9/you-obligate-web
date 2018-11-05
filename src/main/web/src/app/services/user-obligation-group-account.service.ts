import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs/internal/observable/of';
import {from} from 'rxjs/internal/observable/from';
import {UserObligationGroupAccount} from '../models/user-obligation-group-account.model';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class UserObligationGroupAccountService {

  constructor(http: HttpClient) { }

  public getUserObligationGroupAccounts(): Observable<Array<UserObligationGroupAccount>> {
    const userObligationGroupAccounts = [];
    const obligationGroup = {
      name: 'PLAYERS',
      moneyName: 'BIHUN',
      moneyShortcutName: 'BHN'
    };
    for (let i = 0; i < 4; i++){
      const userObligationGroupAccount = {
        accountBalance: 10000,
        obligationGroup: obligationGroup
      };
      userObligationGroupAccounts.push(userObligationGroupAccount);
    }
    return new Observable((observer) => {
      observer.next(userObligationGroupAccounts);
    });
  }

}
