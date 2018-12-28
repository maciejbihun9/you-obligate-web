import {RegisteredServiceObligationStrategy} from './registered-service-obligation-strategy.model';

export interface Bond {
  id: number;
  bondStatus: string;
  numberOfUnitsToServe: number;
  unitOfWorkCost: number;
  registeredServiceObligationStrategy: RegisteredServiceObligationStrategy;
}
