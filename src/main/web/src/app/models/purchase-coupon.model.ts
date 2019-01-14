import {User} from './user.model';
import {Bond} from './bond.model';

export class PurchaseCoupon {
  id: number;
  bond: Bond;
  serviceUnits: number;
  totalCost: number;
}
