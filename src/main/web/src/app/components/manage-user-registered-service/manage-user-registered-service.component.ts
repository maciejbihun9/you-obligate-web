import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {UserRegisteredServiceCategory} from '../../models/user-registered-service-category.model';
import {UserRegisteredServiceService} from '../../services/user-registered.service.ts';
import {UserRegisteredService} from '../../models/user-registered-service.model';
import {UserUnitsRequestServiceService} from '../../services/user-units-request-service.service';
import {UserUnitsRequest} from '../../models/user-units-request.model';

@Component({
  selector: 'app-manage-user-registered-service',
  templateUrl: './manage-user-registered-service.component.html',
  styleUrls: ['./manage-user-registered-service.component.css']
})
export class ManageUserRegisteredServiceComponent implements OnInit {

  private readonly USER_UNITS_REQUEST_SAVED_SUCCESFULLY = 'User units request saved successfully!';

  @Input() fieldDisabled = false;
  @Input() registeredService: UserRegisteredService;

  userRegisteredServiceCategories: string[];
  pickedServiceCategory;
  pickedServiceName: string;
  pickedServiceDescription: string;
  pickedServiceExperience: string;

  constructor(private userRegisteredServiceService: UserRegisteredServiceService,
              private userUnitsRequestServiceService: UserUnitsRequestServiceService) {
    this.userRegisteredServiceCategories = Object.keys(UserRegisteredServiceCategory).filter(key => !isNaN(Number(UserRegisteredServiceCategory[key])));
  }

  ngOnInit() {
    this.pickedServiceCategory = UserRegisteredServiceCategory[this.registeredService.userRegisteredServiceCategory];
    this.pickedServiceName = this.registeredService.serviceName;
    this.pickedServiceDescription = this.registeredService.serviceDescription;
    this.pickedServiceExperience = this.registeredService.experienceDescription;

  }

  public saveUserUnitsRequest(){
    const userUnitsRequest: UserUnitsRequest = new UserUnitsRequest();
    userUnitsRequest.userRegisteredServiceId = this.registeredService.id;
    this.userUnitsRequestServiceService.saveUserUnitsRequest(userUnitsRequest).subscribe((userUnitsRequestResponse) => {
      console.log(this.USER_UNITS_REQUEST_SAVED_SUCCESFULLY);
      console.log(userUnitsRequestResponse);
    });
  }

}
