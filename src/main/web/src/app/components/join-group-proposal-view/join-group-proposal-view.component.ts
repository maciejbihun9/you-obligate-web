import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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

  proposedUnitOfWorkCost: number;

  unitOfWorkTypes = ['HOUR', 'SERVICE', 'KM', 'MILE'];

  pickedUnitOfWorkType;

  obligationGroupId: number;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private userRegisteredService: UserRegisteredServiceService,
              private groupJoinRequestService: GroupJoinRequestService) { }

  ngOnInit() {
    this.obligationGroupId = +this.route.snapshot.paramMap.get('obligationGroupId');

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
    const groupJoinRequest: GroupJoinRequest = {
      obligationGroupId: this.obligationGroupId,
      userRegisteredServiceId: this.selectedUserRegisteredService.id,
      pickedUnitOfWorkType: this.pickedUnitOfWorkType,
      proposedUnitOfWorkCost: this.proposedUnitOfWorkCost,
    };
    this.groupJoinRequestService.sendGroupJoinRequest(groupJoinRequest).subscribe(value => {
      console.log('Join group request created.');
    });
  }

}
