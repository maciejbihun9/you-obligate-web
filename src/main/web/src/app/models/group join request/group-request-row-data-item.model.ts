import {GroupJoinRequestStatus} from "./group-join-request-status.model";

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
  proposedUnitOfWorkType: string;
  proposedUnitOfWorkCost: number;
  status: GroupJoinRequestStatus;

}
