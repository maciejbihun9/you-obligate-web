import { Component, OnInit } from '@angular/core';
import {UserRegisteredServiceCategory} from '../../models/user-registered-service-category.model';
import {UserRegisteredServiceService} from '../../services/user-registered-service.service';
import {UserRegisteredService} from '../../models/user-registered-service.model';

@Component({
  selector: 'app-user-registered-services',
  templateUrl: './user-registered-services.component.html',
  styleUrls: ['./user-registered-services.component.css']
})
export class UserRegisteredServicesComponent implements OnInit {

  userRegisteredServiceCategories: string[];
  pickedServiceCategory: string;
  pickedServiceName: string;
  pickedServiceDescription: string;
  pickedServiceExperience: string;

  constructor(private userRegisteredServiceService: UserRegisteredServiceService) {
    this.userRegisteredServiceCategories = Object.keys(UserRegisteredServiceCategory);
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
      console.log('User registered service succesfully sended!');
    });
  }

}
