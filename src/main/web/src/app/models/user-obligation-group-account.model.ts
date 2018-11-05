import {ObligationGroup} from './obligation-group.model';
import {UserObligationStrategyForRegisteredService} from './user-obligation-strategy-for-registered-service.model';

export interface UserObligationGroupAccount {
  accountBalance: number;
  obligationGroup: ObligationGroup;
  userObligationStrategies: Array<UserObligationStrategyForRegisteredService>;
}
