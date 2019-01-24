import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserRegisteredService} from '../models/user-registered-service.model';
import {Observable} from 'rxjs/index';
import {UserRegisteredServiceEntity} from '../models/user-registered-service-entity.model';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class UserRegisteredServiceService {

    private USER_REGISTERED_SERVICES_URL: string = '/user-registered-services';

    constructor(private http: HttpClient) {}

    public getUserRegisteredService(userRegisteredServiceId: number): Observable<UserRegisteredService> {
      return this.http.get<UserRegisteredService>(this.USER_REGISTERED_SERVICES_URL + '/${userRegisteredServiceId}');
    }

    public getUserRegisteredServices(): Observable<Array<UserRegisteredService>> {
      return this.http.get<Array<UserRegisteredService>>(this.USER_REGISTERED_SERVICES_URL).pipe(
        tap(x => x) // just for simple modification of the data before returning it
      );
    }

    public saveUserRegisteredService(userRegisteredService: UserRegisteredService){
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.post<UserRegisteredService>(this.USER_REGISTERED_SERVICES_URL,
        JSON.stringify(userRegisteredService), {headers: headers});
    }

}
