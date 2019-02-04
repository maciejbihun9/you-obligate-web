import {User} from "./user.model";
import {UserRegisteredService} from "./user-registered-service.model";

export class GroupJoinRequest {

  id?;
  user: User;
  obligationGroupId: number;
  userRegisteredService: UserRegisteredService;
  proposedUnitOfWorkCost: number;
  proposedUnitOfWorkType: string;

}
