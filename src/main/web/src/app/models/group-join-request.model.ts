import {User} from "./user.model";

export class GroupJoinRequest {

  id?;
  user: User;
  username: string;
  obligationGroupId: number;
  userRegisteredServiceId: number;
  proposedUnitOfWorkCost: number;
  proposedUnitOfWorkType: string;

}
