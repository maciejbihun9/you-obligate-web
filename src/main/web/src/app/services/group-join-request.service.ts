import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {GroupJoinRequest} from '../models/group-join-request.model';
import {Observable} from 'rxjs/internal/Observable';
import {PurchaseCoupon} from '../models/purchase-coupon.model';
import {map} from 'rxjs/operators';

@Injectable()
export class GroupJoinRequestService {

  private GROUP_JOIN_REQUESTS_BASE_URL = '/group-join-requests';

  constructor(private httpClient: HttpClient) { }

  public sendGroupJoinRequest(groupJoinRequest: GroupJoinRequest): Observable<HttpResponse<GroupJoinRequest>> {
    /*const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post<GroupJoinRequest>(GROUP_JOIN_REQUESTS_URL, JSON.stringify(groupJoinRequest), {headers: headers});*/

    const testUrl = '/api/groupJoinRequests/0';
    return this.httpClient.get<GroupJoinRequest>(testUrl).pipe(
      map(createdGroupJoinRequest =>
        new HttpResponse<GroupJoinRequest>({body: createdGroupJoinRequest, status: 200, headers: new HttpHeaders(), statusText: '', url: ''})));
  }

  public getAllGroupJoinRequests(): Observable<Array<GroupJoinRequest>> {
     // return this.httpClient.get<GroupJoinRequest>(GROUP_JOIN_REQUESTS_URL);*/
    const testUrl = '/api/groupJoinRequests';
    return this.httpClient.get<Array<GroupJoinRequest>>(testUrl);
  }

}
