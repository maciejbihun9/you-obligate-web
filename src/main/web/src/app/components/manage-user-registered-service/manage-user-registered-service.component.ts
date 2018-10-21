import {Component, Input, OnInit} from '@angular/core';
import {UserRegisteredServiceCategory} from '../../models/user-registered-service-category.model';
import {UserRegisteredServiceService} from '../../services/user-registered-service.service';
import {UserRegisteredService} from '../../models/user-registered-service.model';

@Component({
  selector: 'app-manage-user-registered-service',
  templateUrl: './manage-user-registered-service.component.html',
  styleUrls: ['./manage-user-registered-service.component.css']
})
export class ManageUserRegisteredServiceComponent implements OnInit {

  @Input() fieldDisabled = false;
  @Input() registeredService: UserRegisteredService;

  userRegisteredServiceCategories: string[];
  pickedServiceCategory;
  pickedServiceName: string;
  pickedServiceDescription: string;
  pickedServiceExperience: string;

  constructor(private userRegisteredServiceService: UserRegisteredServiceService) {
    this.userRegisteredServiceCategories = Object.keys(UserRegisteredServiceCategory).filter(key => !isNaN(Number(UserRegisteredServiceCategory[key])));
  }

  ngOnInit() {
    this.pickedServiceCategory = UserRegisteredServiceCategory[this.registeredService.userRegisteredServiceCategory];
    this.pickedServiceName = this.registeredService.serviceName;
    this.pickedServiceDescription = this.registeredService.serviceDescription;
    this.pickedServiceExperience = this.registeredService.experienceDescription;
  }

}
