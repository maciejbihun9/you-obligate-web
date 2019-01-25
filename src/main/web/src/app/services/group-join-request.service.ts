import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {GroupJoinRequest} from '../models/group-join-request.model';
import {Observable} from 'rxjs/internal/Observable';
import {PurchaseCoupon} from '../models/purchase-coupon.model';
import {map} from 'rxjs/operators';

@Injectable()
export class GroupJoinRequestService {

  constructor(private httpClient: HttpClient) { }

  public sendGroupJoinRequest(groupJoinRequest: GroupJoinRequest): Observable<HttpResponse<GroupJoinRequest>> {
    const url = '/group-join-requests';
    /*const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post<GroupJoinRequest>(url, JSON.stringify(groupJoinRequest), {headers: headers});*/

    const testUrl = '/api/groupJoinRequests/0';
    return this.httpClient.get<GroupJoinRequest>(testUrl).pipe(
      map(createdGroupJoinRequest =>
        new HttpResponse<GroupJoinRequest>({body: createdGroupJoinRequest, status: 200, headers: new HttpHeaders(), statusText: '', url: ''})));
  }

}
