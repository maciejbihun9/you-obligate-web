import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs/internal/observable/of';
import {from} from 'rxjs/internal/observable/from';
import {UserObligationGroupAccount} from '../models/user-obligation-group-account.model';
import {Observable} from 'rxjs/internal/Observable';
import {UserObligationStrategyForRegisteredService} from '../models/user-obligation-strategy-for-registered-service.model';
import {UnitOfWork} from '../models/unit-of-work.model';

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
      const userObligationStrategyForRegisteredService: UserObligationStrategyForRegisteredService = {
        unitOfWork: UnitOfWork.HOUR,
        unitOfWorkCost: 100,
        interestRate: 5,
        tooBigDebtFine: 2
      };
      const userObligationGroupStrategies = [userObligationStrategyForRegisteredService];
      const userObligationGroupAccount = {
        accountBalance: 10000,
        obligationGroup: obligationGroup,
        userObligationStrategies: userObligationGroupStrategies
      };
      userObligationGroupAccounts.push(userObligationGroupAccount);
    }
    return new Observable((observer) => {
      observer.next(userObligationGroupAccounts);
    });
  }

}
