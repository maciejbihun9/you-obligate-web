import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {ObligationGroup} from '../models/obligation-group.model';
import {Bond} from '../models/bond.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ObligationGroupsService {

  public static obligationGroupsCache;

  private imagesUrls = ['../'];

  constructor(private httpClient: HttpClient) { }

  public getObligationGroups(): Observable<Array<ObligationGroup>> {
    const getObligationGroupsUrl = '/obligation-groups';
    // return this.httpClient.get(getObligationGroupsUrl);
    const obligationGroups = [];
    let i = 0;
    while (i < 15) {
      const obligationGroup = {
        id: i,
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

  public getBondsForObligationGroup(obligationGroupId): Observable<Array<Bond>> {
    // create mocked data for this list
    const getObligationGroupBondsUrl = `/obligation-groups/${obligationGroupId}/bonds`;
    // return this.httpClient.get(getObligationGroupBondsUrl);

    const obligationGroupBonds = [];
    const registeredServiceObligationStrategy = {
      id: 5,
      userRegisteredService: {
        id: 12,
        serviceName: 'test service name',
        userRegisteredServiceCategory: 'IT',
        serviceDescription: 'IT service description',
        experienceDescription: 'My experience is equal to 150'
      },
      userAccountInObligationGroup: {}
    };
    let i = 0;
    while (i < 10) {
      const bond = {
        id: i,
        bondStatus: 'status',
        numberOfUnitsToServe: i * 13,
        unitOfWorkCost: i * 132,
        registeredServiceObligationStrategy: registeredServiceObligationStrategy
      };
      obligationGroupBonds.push(bond);
      i++;
    }
    return new Observable<Array<Bond>>((observer) => {
      observer.next(obligationGroupBonds);
    });
  }

}
