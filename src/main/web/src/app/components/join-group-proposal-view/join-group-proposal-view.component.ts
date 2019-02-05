import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {UserRegisteredServiceService} from '../../services/user-registered-service.service';
import {UserRegisteredService} from '../../models/user-registered-service.model';
import {GroupJoinRequest} from '../../models/group-join-request.model';
import {GroupJoinRequestService} from '../../services/group-join-request.service';

@Component({
  selector: 'app-join-group-proposal-view',
  templateUrl: './join-group-proposal-view.component.html',
  styleUrls: ['./join-group-proposal-view.component.css']
})
export class JoinGroupProposalViewComponent implements OnInit {

  loginUser: User;

  userRegisteredServices: Array<UserRegisteredService>;

  selectedUserRegisteredService: UserRegisteredService;

  testGroupJoinRequest: GroupJoinRequest;

  proposedUnitOfWorkCost: number;

  unitOfWorkTypes = ['HOUR', 'SERVICE', 'KM', 'MILE'];

  proposedUnitOfWorkType;

  obligationGroupId: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private userRegisteredService: UserRegisteredServiceService,
              private groupJoinRequestService: GroupJoinRequestService) { }

  ngOnInit() {
    this.obligationGroupId = +this.route.snapshot.paramMap.get('obligationGroupId');

    // poll for test group join request object
    this.groupJoinRequestService.getGroupJoinRequest(0).subscribe(groupJoinRequest => {
      this.testGroupJoinRequest = groupJoinRequest;
    });

    // poll for login user, I need his all registered services here, so that he can pick at least one
    this.userService.getLoggedInUser().subscribe(loginUser => {
      this.loginUser = loginUser;

      // poll for user registered services to show them as an options to pick
      this.userRegisteredService.getUserRegisteredServices(this.loginUser.id).subscribe(userRegisteredServices => {
        this.userRegisteredServices = userRegisteredServices.splice(0, 6);
      });
    });
  }

  sendGroupJoinProposition() {
    console.log('Send join group proposal view');
    // create group join request
    this.groupJoinRequestService.sendGroupJoinRequest(this.testGroupJoinRequest).subscribe(httpResponsWithCreatedGroupJoinRequest => {
      console.log('Join group request created.');
      // navigate to a join group request details view and inform that a request has been made in the right way
      this.router.navigate([`obligation-groups/${this.obligationGroupId}/group-join-request-details`, {'obligationGroupId': this.obligationGroupId}]);
    });
  }

}
