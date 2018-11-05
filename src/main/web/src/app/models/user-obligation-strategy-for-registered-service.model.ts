import {UnitOfWork} from './unit-of-work.model';

export interface UserObligationStrategyForRegisteredService {
  unitOfWork: UnitOfWork;
  unitOfWorkCost: number;
  interestRate: number;
  tooBigDebtFine: number;
}
