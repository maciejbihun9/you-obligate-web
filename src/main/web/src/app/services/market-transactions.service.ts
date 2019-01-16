import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {PurchaseDataObjectModel} from '../models/purchase-data-object.model';
import {Observable} from 'rxjs/internal/Observable';
import {Bond} from '../models/bond.model';
import {RegisteredServiceObligationStrategy} from '../models/registered-service-obligation-strategy.model';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class MarketTransactionsService {

  constructor(private httpClient: HttpClient) { }

  public makeCouponsPurchase(purchaseObject: PurchaseDataObjectModel): Observable<HttpResponse<Bond>> {
    // send user data to the server
    /*const url = '/market-transactions/make-coupons-purchase';
    return this.httpClient.post<Bond>(url, purchaseObject, {observe: 'response'});*/
    const testBondUrl = 'api/bonds/5';

    return this.httpClient.get<Bond>(testBondUrl).pipe(
      map(bond => new HttpResponse<Bond>({body: bond, status: 409, headers: new HttpHeaders(), statusText: '', url: ''})));
  }

}
