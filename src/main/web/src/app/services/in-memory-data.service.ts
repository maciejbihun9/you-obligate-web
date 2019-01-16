import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Bond} from '../models/bond.model';
import {PurchaseCoupon} from '../models/purchase-coupon.model';
import {RegisteredServiceObligationStrategy} from '../models/registered-service-obligation-strategy.model';
import {UserRegisteredService} from '../models/user-registered-service.model';
import {UserAccountInObligationGroup} from '../models/user-account-in-obligation-group.model';
import {User} from '../models/user.model';
import {ObligationGroup} from '../models/obligation-group.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  private amountOfObjectsToCreate = 15;

  createDb() {

    const users = this.generateUsers(this.amountOfObjectsToCreate);


    const userRegisteredServices = this.generateUserRegisteredServices(this.amountOfObjectsToCreate);

    const obligationGroups = this.generateObligationGroups(this.amountOfObjectsToCreate);

    const userAccountsInObligationGroup = this.generateUserAccountsInObligationGroup(users, obligationGroups, this.amountOfObjectsToCreate);

    const registeredServiceObligationStrategies = this.generateRegisteredServiceObligationStrategies(userRegisteredServices, userAccountsInObligationGroup, this.amountOfObjectsToCreate);

    const bonds = this.generateBonds(registeredServiceObligationStrategies, this.amountOfObjectsToCreate);

    const purchaseCoupons = this.generatePurchaseCoupons(bonds);

    return {users, bonds, userRegisteredServices, obligationGroups,
      userAccountsInObligationGroup, registeredServiceObligationStrategies, purchaseCoupons};
  }

  generateBonds(registeredServiceObligationStrategies: Array<RegisteredServiceObligationStrategy>, amountOfObjectsToCreate: number): Array<Bond> {
    const bonds = [];
    let i = 0;
    while (true) {
      const bond = { id: i, bondStatus: 'CREATED', numberOfUnitsToServe: i * 30,
        unitOfWorkCost: i * 12.10, registeredServiceObligationStrategy: registeredServiceObligationStrategies[i]};
      bonds.push(bond);
      if (i === amountOfObjectsToCreate) { break; }
      i++;
    }
    return bonds;
  }

  generateUsers(amountOfObjectsToCreate: number): Array<User> {
    const users = [];
    let i = 0;
    while (true) {
      const user = { id: i, name: 'user' + i, surname: 'surname' + i, username: 'username' + i, password: 'password' + i};
      users.push(user);
      i++;
      if (i === amountOfObjectsToCreate) { break; }
    }
    return users;
  }

  generateObligationGroups(amountOfObjectsToCreate: number): Array<ObligationGroup> {
    const obligationGroups = [];
    let i = 0;
    while (true) {
      const obligationGroup = {
        id: i,
        name: 'obligation_group' + i,
        groupCurrencyName: 'GROUP_CURRENCY_NAME' + i,
        groupCurrencyShortcutName: 'GROUP_CURRENCY_SHORTCUT_NAME' + i,
        accountBalance: i * 123.00,
        description: 'group description',
      };
      obligationGroups.push(obligationGroup);
      i++;
      if (i === amountOfObjectsToCreate) { break; }
    }
    return obligationGroups;
  }

  generateUserRegisteredServices(amountOfObjectsToCreate) {
    const userRegisteredServices = [];
    let i = 0;
    while (true) {
      const userRegisteredService = {
        id: i,
        serviceName: 'service_name' + i,
        userRegisteredServiceCategory: '',
        serviceDescription: 'simple description',
        experienceDescription: 'experience description'
      };
      userRegisteredServices.push(userRegisteredService);
      if (i === amountOfObjectsToCreate) { break; }
      i++;
    }
    return userRegisteredServices;
  }

  generateUserAccountsInObligationGroup(users: Array<User>, obligationGroups: Array<ObligationGroup>, amountOfObjectsToCreate: number): Array<UserAccountInObligationGroup> {
    const userAccountsInObligationGroup = [];
    let i = 0;
    while (true) {
      const userAccountInObligationGroup = {
        id: i,
        user: users[i],
        accountBalance: i * 123.00,
        obligationGroup: obligationGroups[i]
      };
      userAccountsInObligationGroup.push(userAccountInObligationGroup);
      if (i === amountOfObjectsToCreate) { break; }
      i++;
    }
    return userAccountsInObligationGroup;
  }

  generateRegisteredServiceObligationStrategies(userRegisteredServices: Array<UserRegisteredService>,
                                                userAccountsInObligationGroup: Array<UserAccountInObligationGroup>,
                                                amountOfObjectsToCreate: number): Array<RegisteredServiceObligationStrategy> {
    const registeredServiceObligationStrategies = [];
    let i = 0;
    while (true) {
      const registeredServiceObligationStrategy: RegisteredServiceObligationStrategy = {
        id: i,
        userRegisteredService: userRegisteredServices[i],
        userAccountInObligationGroup: userAccountsInObligationGroup[i]
      };
      registeredServiceObligationStrategies.push(registeredServiceObligationStrategy);
      if (i === amountOfObjectsToCreate) { break; }
      i++;
    }
    return registeredServiceObligationStrategies;
  }

  generatePurchaseCoupons(bonds: Array<Bond>): Array<PurchaseCoupon> {
    const purchaseCoupons: Array<PurchaseCoupon> = [
      { id: 1, bond: bonds[0], serviceUnits: 15, totalCost: 120.00 },
      { id: 2, bond: bonds[1], serviceUnits: 17, totalCost: 120.00 },
      { id: 3, bond: bonds[2], serviceUnits: 19, totalCost: 120.00 }
    ];
    return purchaseCoupons;
  }

}
