import {ObligationGroup} from './obligation-group.model';
import {RegisteredServiceObligationStrategy} from "./registered-service-obligation-strategy.model";

export interface UserObligationGroupAccount {
  accountBalance: number;
  obligationGroup: ObligationGroup;
  userObligationStrategies: Array<RegisteredServiceObligationStrategy>;
}
