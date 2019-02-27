import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GroupJoinRequestService} from "../../services/group-join-request.service";
import {GroupJoinRequest} from "../../models/group-join-request/group-join-request.model";
import {UnitOfWork} from "../../models/unit-of-work.model";
import {RegisteredServiceObligationStrategy} from "../../models/registered-service-obligation-strategy.model";
import {RegisteredServiceObligationStrategyService} from "../../services/registered-service-obligation-strategy.service";
import {UserRegisteredService} from "../../models/user-registered-service.model";
import {UserAccountInObligationGroup} from "../../models/user-account-in-obligation-group.model";

@Component({
  selector: 'app-create-obligation-strategy-view',
  templateUrl: './create-obligation-strategy-view.component.html',
  styleUrls: ['./create-obligation-strategy-view.component.css']
})
export class CreateObligationStrategyViewComponent implements OnInit {

  @Input() groupJoinRequestId: number = 0;

  groupJoinRequest: GroupJoinRequest;

  unitOfWorkCost: number;

  userAccountInObligationGroup: UserAccountInObligationGroup;

  unitOfWorkTypes = Object.keys(UnitOfWork).filter(unitOfWork => !isNaN(UnitOfWork[unitOfWork]));

  unitOfWorkType: UnitOfWork;

  constructor(private groupJoinRequestService: GroupJoinRequestService,
              private registeredServiceObligationStrategyService: RegisteredServiceObligationStrategyService) { }

  ngOnInit() {
    this.groupJoinRequestService.getGroupJoinRequest(this.groupJoinRequestId).subscribe(groupJoinRequest => {
      this.groupJoinRequest = groupJoinRequest;
      debugger;
      // init unit of work items with user proposed data
      this.unitOfWorkCost = groupJoinRequest.proposedUnitOfWorkCost;
      this.unitOfWorkType = groupJoinRequest.proposedUnitOfWorkType;

      // create user account in obligation group
      // if a user already has an account then just load it on the server, if not create it during creating of registered service obligation strategy
      this.userAccountInObligationGroup = {
        obligationGroup: this.groupJoinRequest.obligationGroup
      };
    });
  }

  createObligationStrategy(){
    const registeredServiceObligationStrategy: RegisteredServiceObligationStrategy = {
      userRegisteredService: this.groupJoinRequest.userRegisteredService,
      unitOfWork: this.unitOfWorkType,
      unitOfWorkCost: this.unitOfWorkCost,
      userAccountInObligationGroup: this.userAccountInObligationGroup,
      interestRate: 0.5,
      minAmountOfUnitsPerBond: 100,
      maxAmountOfUnitsForObligation: 1000
    };
    this.registeredServiceObligationStrategyService.createRegisteredServiceObligationStrategy(registeredServiceObligationStrategy);
  }

}
