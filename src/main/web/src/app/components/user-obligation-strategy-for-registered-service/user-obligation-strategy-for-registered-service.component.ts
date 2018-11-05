import {Component, Input, OnInit} from '@angular/core';
import {UserObligationStrategyForRegisteredService} from '../../models/user-obligation-strategy-for-registered-service.model';

@Component({
  selector: 'app-user-obligation-strategy-for-registered-service',
  templateUrl: './user-obligation-strategy-for-registered-service.component.html',
  styleUrls: ['./user-obligation-strategy-for-registered-service.component.css']
})
export class UserObligationStrategyForRegisteredServiceComponent implements OnInit {
  /**
   * Component responsible for displaying obligation
   * strategy details for given registered service in given group.
   */

  @Input() userObligationStrategyForRegisteredService: UserObligationStrategyForRegisteredService;

  constructor() { }

  ngOnInit() {
  }

}
