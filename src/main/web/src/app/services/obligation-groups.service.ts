import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {ObligationGroup} from '../models/obligation-group.model';

@Injectable()
export class ObligationGroupsService {

  private imagesUrls = ['../'];

  constructor() { }

  public getObligationGroups(): Observable<Array<ObligationGroup>> {
    const obligationGroups = [];
    let i = 0;
    while (i < 15){
      const obligationGroup = {
        name: 'SPARTANS',
        groupCurrencyName: 'BIHUNS',
        groupCurrencyShortcutName: 'BHN',
        amountOfCreatedMoney: i * 23,
        amountOfUsers: (i + 123) * 12,
        description: 'We are looking  for true profesionalists with passion',
      };
      obligationGroups.push(obligationGroup);
      i++;
    }

    return new Observable<Array<ObligationGroup>>((observer) => {
      observer.next(obligationGroups);
    });
  }

}
