import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BondService {

  constructor(private httpClient: HttpClient) { }

  public getBondWithPurchaseCoupons(obligationGroupId, bondId) {
    const getBondWithPurchaseCouponsUrl = `/obligation-groups/${obligationGroupId}/bonds/${bondId}`;
    return this.httpClient.get(getBondWithPurchaseCouponsUrl);
  }

}
