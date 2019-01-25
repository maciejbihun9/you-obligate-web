import {User} from './user.model';
import {UserRegisteredService} from './user-registered-service.model';


export class GroupJoinRequest {

  id?;
  obligationGroupId: number;
  userRegisteredServiceId: number;
  proposedUnitOfWorkCost: number;
  pickedUnitOfWorkType: string;

}
