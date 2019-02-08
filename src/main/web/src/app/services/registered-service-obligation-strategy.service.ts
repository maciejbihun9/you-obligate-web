import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisteredServiceObligationStrategy} from "../models/registered-service-obligation-strategy.model";

@Injectable({
  providedIn: 'root'
})
export class RegisteredServiceObligationStrategyService {

  private readonly REGISTERED_SERVICE_OBLIGATION_STRATEGIES_URL: string = '/registered-service-obligation-strategies';

  constructor(private httpClient: HttpClient) { }

  createRegisteredServiceObligationStrategy(registeredServiceObligationStrategy: RegisteredServiceObligationStrategy){
    this.httpClient.post(this.REGISTERED_SERVICE_OBLIGATION_STRATEGIES_URL, registeredServiceObligationStrategy)
  }

}
