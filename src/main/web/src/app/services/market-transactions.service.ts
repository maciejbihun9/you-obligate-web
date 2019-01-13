import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MarketTransactionsService {

  constructor(private httpClient: HttpClient) { }

  public makePurchase(amountOfUnitsToBuy: number) {
    // send user data to the server
    const url = '/market-transactions';
    const amountOfUnitsToBuyObject = {amountOfUnitsToBuy: amountOfUnitsToBuy};
    this.httpClient.post(url, amountOfUnitsToBuyObject);
  }

}
