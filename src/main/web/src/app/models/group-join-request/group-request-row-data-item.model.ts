import {GroupJoinRequestStatus} from "./group-join-request-status.model";
import {UnitOfWork} from "../unit-of-work.model";

export class GroupJoinRequestRowDataItem {

  // user data
  name: string;
  surname: string;
  username: string;
  contactNumber: string;
  // user registered service model data
  userRegisteredServiceName: string;
  userRegisteredServiceCategory: string;
  serviceDescription: string;
  experienceDescription: string;
  // group join request data
  groupJoinRequestId: number;
  proposedUnitOfWorkType: UnitOfWork;
  proposedUnitOfWorkCost: number;
  status: GroupJoinRequestStatus;

}
