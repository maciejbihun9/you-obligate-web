import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {User} from '../models/user.model';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {}

  public getLoggedInUser(): Observable<User> {
    const getLoggedInUserUrl = '/users/logged-in-user';
    return this.httpClient.get<User>(getLoggedInUserUrl);
  }

}
