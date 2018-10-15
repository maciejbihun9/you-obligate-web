import { Component, OnInit } from '@angular/core';
import {UserRegisteredServiceCategory} from '../../models/user-registered-service-category.model';
import {UserRegisteredServiceService} from '../../services/user-registered-service.service';
import {UserRegisteredService} from '../../models/user-registered-service.model';
import {UserRegisteredServicesComponent} from '../user-registered-services/user-registered-services.component';

@Component({
  selector: 'app-user-registered-service',
  templateUrl: './user-registered-service.component.html',
  styleUrls: ['./user-registered-service.component.css']
})
export class UserRegisteredServiceComponent implements OnInit {

  userRegisteredServiceCategories: string[];
  pickedServiceCategory: string;
  pickedServiceName: string;
  pickedServiceDescription: string;
  pickedServiceExperience: string;

  constructor(private userRegisteredServiceService: UserRegisteredServiceService) {
    this.userRegisteredServiceCategories = Object.keys(UserRegisteredServiceCategory).filter(key => !isNaN(Number(UserRegisteredServiceCategory[key])));
  }

  ngOnInit() {

  }

  public saveUserRegisteredService() {
    const userRegisteredService = new UserRegisteredService();
    userRegisteredService.experienceDescription = this.pickedServiceDescription;
    userRegisteredService.serviceDescription = this.pickedServiceDescription;
    userRegisteredService.serviceName = this.pickedServiceName;
    userRegisteredService.userRegisteredServiceCategory = UserRegisteredServiceCategory[this.pickedServiceCategory];
    this.userRegisteredServiceService.saveUserRegisteredService(userRegisteredService).subscribe(() => {
      console.log('Response came successfully!');
      UserRegisteredServicesComponent.stateChangedSource.next(userRegisteredService);
    }, (error) => {console.log(error); });
  }

}
