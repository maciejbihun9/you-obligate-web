import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {ObligationGroup} from '../models/obligation-group.model';

@Injectable()
export class ObligationGroupsService {

  constructor() { }

  public getObligationGroups(): Observable<Array<ObligationGroup>> {
    const obligationGroups = [];
    let i = 0;
    while (i < 15){
      const obligationGroup = {
        name: 'SPARTANS',
        groupCurrencyName: 'BIHUNS',
        groupCurrencyShortcutName: 'BHN',
        description: 'We are looking  for true profesionalists with passion'
      };
      obligationGroups.push(obligationGroup);
      i++;
    }

    return new Observable<Array<ObligationGroup>>((observer) => {
      observer.next(obligationGroups);
    });
  }

}
