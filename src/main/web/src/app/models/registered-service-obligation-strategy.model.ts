import {UserRegisteredService} from './user-registered-service.model';
import {UserAccountInObligationGroup} from './user-account-in-obligation-group.model';
import {UnitOfWork} from './unit-of-work.model';

export interface RegisteredServiceObligationStrategy {
  id: number;
  userRegisteredService: UserRegisteredService;
  userAccountInObligationGroup: UserAccountInObligationGroup;
  unitOfWork: UnitOfWork;
  unitOfWorkCost: number;
  interestRate: number;
  minAmountOfUnitsPerBond: number;
  maxAmountOfUnitsForObligation: number;
}
