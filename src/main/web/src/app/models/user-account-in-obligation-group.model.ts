import {User} from './user.model';
import {ObligationGroup} from './obligation-group.model';

export interface UserAccountInObligationGroup {
  id?: number;
  user?: User;
  accountBalance?: number;
  obligationGroup?: ObligationGroup;
}
