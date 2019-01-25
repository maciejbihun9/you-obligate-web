import { Component, OnInit } from '@angular/core';
import {UserRegisteredServiceCategory} from '../../models/user-registered-service-category.model';
import {UserRegisteredServiceService} from '../../services/user-registered-service.service';
import {UserRegisteredService} from '../../models/user-registered-service.model';
import {Observable} from 'rxjs/internal/Observable';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Subject} from 'rxjs/internal/Subject';

@Component({
  selector: 'app-user-registered-services',
  templateUrl: './user-registered-services.component.html',
  styleUrls: ['./user-registered-services.component.css']
})
export class UserRegisteredServicesComponent implements OnInit{

  public static readonly stateChangedSource: Subject<UserRegisteredService> = new Subject<UserRegisteredService>();

  private static readonly newUserServiceRegistered$: Observable<UserRegisteredService> = UserRegisteredServicesComponent.stateChangedSource.asObservable();

  userRegisteredServices: Array<UserRegisteredService> = [];

  constructor(private userRegisteredServiceService: UserRegisteredServiceService){}

  ngOnInit(): void {
    /*this.userRegisteredServiceService.getUserRegisteredServices().subscribe((registeredServices) => {
      this.userRegisteredServices = registeredServices;
    });*/
    UserRegisteredServicesComponent.newUserServiceRegistered$.subscribe((newUserRegisteredService) => {
        this.userRegisteredServices.push(newUserRegisteredService);
    });
  }
}
