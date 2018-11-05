import {Component, Input, OnInit} from '@angular/core';
import {ObligationGroup} from '../../models/obligation-group.model';

@Component({
  selector: 'app-obligation-group',
  templateUrl: './obligation-group.component.html',
  styleUrls: ['./obligation-group.component.css']
})
export class ObligationGroupComponent implements OnInit {

  @Input() obligationGroup: ObligationGroup;

  constructor() { }

  ngOnInit() {
  }

}
