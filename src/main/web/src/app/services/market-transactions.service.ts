import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MarketTransactionsService {

  constructor(private httpClient: HttpClient) { }

  public makePurchase(purchaseObject: Object) {
    // send user data to the server
    const url = '/market-transactions/make-purchase';
    this.httpClient.post(url, purchaseObject);
  }

}
