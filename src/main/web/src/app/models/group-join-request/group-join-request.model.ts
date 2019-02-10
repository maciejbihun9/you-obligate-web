import {User} from "../user.model";
import {UserRegisteredService} from "../user-registered-service.model";
import {ObligationGroup} from "../obligation-group.model";
import {GroupJoinRequestStatus} from "./group-join-request-status.model";
import {UnitOfWork} from "../unit-of-work.model";

export class GroupJoinRequest {
  id?;
  user: User;
  obligationGroup: ObligationGroup;
  userRegisteredService: UserRegisteredService;
  proposedUnitOfWorkCost: number;
  proposedUnitOfWorkType: UnitOfWork;
  status: GroupJoinRequestStatus;
}
