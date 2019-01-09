import {Bond} from './bond.model';

export interface ObligationGroup {
  id?: number;
  name: String;
  groupCurrencyName: String;
  groupCurrencyShortcutName: String;
  accountBalance: number;
  amountOfUsers: number;
  description: string;
  logo: string;
  issuedBonds: Array<Bond>;
}
