import {Component, Input, OnInit} from '@angular/core';
import {RegisteredServiceObligationStrategy} from "../../models/registered-service-obligation-strategy.model";

@Component({
  selector: 'app-registered-service-obligation-strategy',
  templateUrl: './registered-service-obligation-strategy.component.html',
  styleUrls: ['./registered-service-obligation-strategy.component.css']
})
export class RegisteredServiceObligationStrategyComponent implements OnInit {
  /**
  * Component responsible for displaying obligation
  * strategy details for given registered service in given group.
  */

  @Input() registeredServiceObligationStrategy: RegisteredServiceObligationStrategy;

  constructor() { }

  ngOnInit() {

  }

}
