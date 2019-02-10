import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserObligationGroupAccount} from '../models/user-obligation-group-account.model';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class UserObligationGroupAccountService {

  constructor(private httpClient: HttpClient) { }

  public getUserAccountBalanceInGivenObligationGroup(obligationGroupId: number): Observable<number> {
    /*const url = `/user-account-in-obligation-group/${obligationGroupId}/user-account-balance/`;
    return this.httpClient.get<number>(url);*/
    return new Observable((observer) => {
      observer.next(100.00);
    });
  }

  public getUserObligationGroupAccounts(): Observable<Array<UserObligationGroupAccount>> {
    const url = '/api/userAccountsInObligationGroup';
    return this.httpClient.get<Array<UserObligationGroupAccount>>(url);
  }

}
