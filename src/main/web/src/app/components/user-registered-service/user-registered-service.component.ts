import {AfterViewChecked, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {UserRegisteredServiceCategory} from '../../models/user-registered-service-category.model';
import {UserRegisteredServiceService} from '../../services/user-registered-service.service';
import {UserRegisteredService} from '../../models/user-registered-service.model';
import {UserRegisteredServicesComponent} from '../user-registered-services/user-registered-services.component';

@Component({
  selector: 'app-user-registered-service',
  templateUrl: './user-registered-service.component.html',
  styleUrls: ['./user-registered-service.component.css']
})
export class UserRegisteredServiceComponent implements AfterViewChecked {

  private readonly USER_REGISTERED_SERVICE_SAVED_SUCCESFULLY = 'User registered service saved successfully!';

  userRegisteredServiceCategories: string[];
  pickedServiceCategory;
  pickedServiceName: string;
  pickedServiceDescription: string;
  pickedServiceExperience: string;

  constructor(private userRegisteredServiceService: UserRegisteredServiceService, private cdRef: ChangeDetectorRef) {
    this.userRegisteredServiceCategories =
      Object.keys(UserRegisteredServiceCategory).filter(key => !isNaN(Number(UserRegisteredServiceCategory[key])));
  }

  ngAfterViewChecked()
  {
    this.cdRef.detectChanges();
  }

  public saveUserRegisteredService() {
    const userRegisteredService = new UserRegisteredService();
    userRegisteredService.experienceDescription = this.pickedServiceDescription;
    userRegisteredService.serviceDescription = this.pickedServiceDescription;
    userRegisteredService.serviceName = this.pickedServiceName;
    userRegisteredService.userRegisteredServiceCategory = UserRegisteredServiceCategory[this.pickedServiceCategory];
    UserRegisteredServicesComponent.stateChangedSource.next(userRegisteredService);
    this.userRegisteredServiceService.saveUserRegisteredService(userRegisteredService).subscribe((userRegisteredServiceResponse) => {
      console.log(this.USER_REGISTERED_SERVICE_SAVED_SUCCESFULLY);
      userRegisteredService.id = userRegisteredServiceResponse['id'];
      UserRegisteredServicesComponent.stateChangedSource.next(userRegisteredService);
    }, (error) => {console.log(error); });
  }

}
