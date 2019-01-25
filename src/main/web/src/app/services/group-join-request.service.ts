import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GroupJoinRequest} from '../models/group-join-request.model';

@Injectable()
export class GroupJoinRequestService {

  constructor(private httpClient: HttpClient) { }

  public sendGroupJoinRequest(groupJoinRequest: GroupJoinRequest) {
    const url = '/group-join-requests';
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post<GroupJoinRequest>(url, JSON.stringify(groupJoinRequest), {headers: headers});
  }

}
