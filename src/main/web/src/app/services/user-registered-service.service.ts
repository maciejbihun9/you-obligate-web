import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserRegisteredService} from '../models/user-registered-service.model';
import {Observable} from 'rxjs/index';

@Injectable()
export class UserRegisteredServiceService {

    private readonly USER_REGISTERED_SERVICES_URL: string = '/user-registered-services';


    constructor(private http: HttpClient) {}

    public getUserRegisteredService(userRegisteredServiceId: number): Observable<UserRegisteredService> {
      return this.http.get<UserRegisteredService>(this.USER_REGISTERED_SERVICES_URL + '/${userRegisteredServiceId}');
    }

    public getUserRegisteredServices(): Observable<Array<UserRegisteredService>> {
      return this.http.get<Array<UserRegisteredService>>(this.USER_REGISTERED_SERVICES_URL);
    }

    public saveUserRegisteredService(userRegisteredService: UserRegisteredService){
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.post<UserRegisteredService>(this.USER_REGISTERED_SERVICES_URL,
        JSON.stringify(userRegisteredService), {headers: headers});
    }

}
