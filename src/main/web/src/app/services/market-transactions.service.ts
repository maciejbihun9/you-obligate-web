import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PurchaseDataObjectModel} from '../models/purchase-data-object.model';

@Injectable()
export class MarketTransactionsService {

  constructor(private httpClient: HttpClient) { }

  public makePurchase(purchaseObject: PurchaseDataObjectModel) {
    // send user data to the server
    const url = '/market-transactions/make-purchase';
    this.httpClient.post(url, purchaseObject);
  }

}
