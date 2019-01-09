import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Bond} from '../models/bond.model';

@Injectable()
export class BondService {

  constructor(private httpClient: HttpClient) { }

  public getBondWithPurchaseCoupons(obligationGroupId, bondId) {
    const getBondWithPurchaseCouponsUrl = `/obligation-groups/${obligationGroupId}/bonds/${bondId}`;
    return this.httpClient.get(getBondWithPurchaseCouponsUrl);
  }

  public getBond(bondId: number): Observable<Bond> {
    const getBondUrl = `/bonds/${bondId}`;
    return this.httpClient.get<Bond>(getBondUrl);
  }

}
