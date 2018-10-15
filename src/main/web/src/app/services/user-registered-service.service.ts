import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserRegisteredService} from '../models/user-registered-service.model';
import {Observable} from 'rxjs/index';

@Injectable()
export class UserRegisteredServiceService {

    private readonly USER_REGISTERED_SERVICES: string = 'user-registered-services';

    constructor(private http: HttpClient) {
    }

    public getUserRegisteredServices(): Observable<Array<UserRegisteredService>> {
      return this.http.get<Array<UserRegisteredService>>(this.USER_REGISTERED_SERVICES);
    }

    public saveUserRegisteredService(userRegisteredService: UserRegisteredService){
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.post<UserRegisteredService>(this.USER_REGISTERED_SERVICES,
        JSON.stringify(userRegisteredService), {headers: headers});
    }

}
