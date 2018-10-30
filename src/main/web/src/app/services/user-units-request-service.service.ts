import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserRegisteredService} from '../models/user-registered-service.model';
import {Observable} from 'rxjs/index';
import {UserUnitsRequest} from '../models/user-units-request.model';

@Injectable()
export class UserUnitsRequestServiceService {

    private readonly USER_UNITS_REQUEST_URL: string = '/user_units_request';

    constructor(private http: HttpClient) {}

    public saveUserUnitsRequest(userUnitsRequest: UserUnitsRequest){
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.post<UserRegisteredService>(this.USER_UNITS_REQUEST_URL,
        JSON.stringify(userUnitsRequest), {headers: headers});
    }

}
