import {User} from './user.model';
import {Bond} from './bond.model';
import {RegisteredServiceObligationStrategy} from './registered-service-obligation-strategy.model';

export class PurchaseCoupon {
  id: number;
  bond: Bond;
  serviceUnits: number;
  totalCost: number;
}
