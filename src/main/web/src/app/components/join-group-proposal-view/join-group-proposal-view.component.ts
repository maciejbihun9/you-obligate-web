import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {UserRegisteredServiceService} from '../../services/user-registered-service.service';
import {UserRegisteredService} from '../../models/user-registered-service.model';

@Component({
  selector: 'app-join-group-proposal-view',
  templateUrl: './join-group-proposal-view.component.html',
  styleUrls: ['./join-group-proposal-view.component.css']
})
export class JoinGroupProposalViewComponent implements OnInit {

  loginUser: User;

  userRegisteredServices: Array<UserRegisteredService>;

  unitOfWorkCost: number;

  unitOfWorkTypes = ['HOUR', 'SERVICE', 'KM', 'MILE'];

  pickedUnitOfWorkType;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private userRegisteredService: UserRegisteredServiceService) { }

  ngOnInit() {
    const obligationGroupId: number = +this.route.snapshot.paramMap.get('obligationGroupId');

    // poll for login user, I need his all registered services here, so that he can pick at least one
    this.userService.getLoggedInUser().subscribe(loginUser => {
      this.loginUser = loginUser;

      // poll for user registered services to show them as an options to pick
      this.userRegisteredService.getUserRegisteredServices(this.loginUser.id).subscribe(userRegisteredServices => {
        this.userRegisteredServices = userRegisteredServices.splice(0, 6);
      });
    });
  }

  sendJoinGroupProposition(){
    console.log('Send join group proposal view');
    // send
  }

}
