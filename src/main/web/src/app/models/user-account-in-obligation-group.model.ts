import {ObligationGroup} from './obligation-group.model';
import {RegisteredServiceObligationStrategy} from './registered-service-obligation-strategy.model';
import {User} from './user.model';

export interface UserAccountInObligationGroup {
  id?: number;
  user?: User;
  accountBalance?: number;
  obligationGroup?: ObligationGroup;
  userObligationStrategies?: Array<RegisteredServiceObligationStrategy>;
}
