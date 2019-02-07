import {Component, Input, OnInit} from '@angular/core';
import {RegisteredServiceObligationStrategy} from '../../models/registered-service-obligation-strategy.model';

@Component({
  selector: 'app-registered-service-obligation-strategy',
  templateUrl: './registered-service-obligation-strategy.component.html',
  styleUrls: ['./registered-service-obligation-strategy.component.css']
})
export class RegisteredServiceObligationStrategyComponent implements OnInit {

  @Input() registeredServiceObligationStrategy: RegisteredServiceObligationStrategy;

  constructor() { }

  ngOnInit() {
  }

}
