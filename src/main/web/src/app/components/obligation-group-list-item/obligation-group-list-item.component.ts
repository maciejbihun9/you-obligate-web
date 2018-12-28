import {Component, Input, OnInit} from '@angular/core';
import {ObligationGroup} from '../../models/obligation-group.model';

@Component({
  selector: 'app-obligation-group-list-item',
  templateUrl: './obligation-group-list-item.component.html',
  styleUrls: ['./obligation-group-list-item.component.css']
})
export class ObligationGroupListItemComponent implements OnInit {

  @Input() obligationGroup: ObligationGroup;

  constructor() { }

  ngOnInit() {
  }

}
