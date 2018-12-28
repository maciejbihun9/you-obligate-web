import {UserRegisteredService} from './user-registered-service.model';
import {UserAccountInObligationGroup} from './user-account-in-obligation-group';

export interface RegisteredServiceObligationStrategy {
  id: number;
  userRegisteredService: UserRegisteredService;
  userAccountInObligationGroup: UserAccountInObligationGroup;
}
