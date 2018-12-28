import {UnitOfWork} from './unit-of-work.model';
import {ObligationGroup} from './obligation-group.model';

export interface UserObligationStrategyForRegisteredService {
  unitOfWork: UnitOfWork;
  unitOfWorkCost: number;
  interestRate: number;
  tooBigDebtFine: number;
  debtUnitsLimit?: number;
  obligationGroup?: ObligationGroup;
  alreadyObligatedUnitsOfWork?: number;
}
