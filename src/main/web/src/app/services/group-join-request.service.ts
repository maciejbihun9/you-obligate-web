import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {GroupJoinRequest} from '../models/group join request/group-join-request.model';
import {Observable} from 'rxjs/internal/Observable';
import {PurchaseCoupon} from '../models/purchase-coupon.model';
import {map} from 'rxjs/operators';
import {GroupJoinRequestStatus} from "../models/group join request/group-join-request-status.model";
import {GroupJoinRequestStatusTransaction} from "../models/group join request/group-join-request-status-transaction.model";

@Injectable()
export class GroupJoinRequestService {

  private GROUP_JOIN_REQUESTS_BASE_URL = '/group-join-requests';

  private TEST_URL = '/api/groupJoinRequests';

  constructor(private httpClient: HttpClient) { }

  public sendGroupJoinRequest(groupJoinRequest: GroupJoinRequest): Observable<HttpResponse<GroupJoinRequest>> {
    /*const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post<GroupJoinRequest>(GROUP_JOIN_REQUESTS_URL, JSON.stringify(groupJoinRequest), {headers: headers});*/
    return this.httpClient.get<GroupJoinRequest>(this.TEST_URL).pipe(
      map(createdGroupJoinRequest =>
        new HttpResponse<GroupJoinRequest>({body: createdGroupJoinRequest, status: 200, headers: new HttpHeaders(), statusText: '', url: ''})));
  }

  public getGroupJoinRequest(groupJoinRequestId){
    return this.httpClient.get<GroupJoinRequest>(this.TEST_URL + '/' + groupJoinRequestId);
  }

  public getAllGroupJoinRequests(): Observable<Array<GroupJoinRequest>> {
     // return this.httpClient.get<GroupJoinRequest>(GROUP_JOIN_REQUESTS_URL);*/
    return this.httpClient.get<Array<GroupJoinRequest>>(this.TEST_URL);
  }

  public updateGroupJoinRequest(groupJoinRequest: GroupJoinRequest){
    const updateGroupJoinRequestUrl = this.GROUP_JOIN_REQUESTS_BASE_URL + '/' + groupJoinRequest.id;
    return this.httpClient.put<GroupJoinRequest>(updateGroupJoinRequestUrl, JSON.stringify(groupJoinRequest));
  }

}
