import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs/internal/observable/of';
import {from} from 'rxjs/internal/observable/from';
import {UserAccountInObligationGroup} from '../models/user-account-in-obligation-group.model';
import {Observable} from 'rxjs/internal/Observable';
import {UnitOfWork} from '../models/unit-of-work.model';
import {RegisteredServiceObligationStrategy} from '../models/registered-service-obligation-strategy.model';
import {RegisteredServiceObligationStrategyService} from './registered-service-obligation-strategy.service';

@Injectable()
export class UserAccountInObligationGroupService {

  constructor(private httpClient: HttpClient, private registeredServiceObligationStrategyService: RegisteredServiceObligationStrategyService) { }


  public getUserAccountBalanceInGivenObligationGroup(obligationGroupId: number): Observable<number> {
    /*const url = `/user-account-in-obligation-group/${obligationGroupId}/user-account-balance/`;
    return this.httpClient.get<number>(url);*/
    return new Observable((observer) => {
      observer.next(100.00);
    });
  }

  public getUserAccountsInObligationGroup(): Observable<Array<UserAccountInObligationGroup>> {
    const userObligationGroupAccountsUrl = '/api/userAccountsInObligationGroup';
    return this.httpClient.get<Array<UserAccountInObligationGroup>>(userObligationGroupAccountsUrl);
  }

}
