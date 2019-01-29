import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sort-switch',
  templateUrl: './sort-switch.component.html',
  styleUrls: ['./sort-switch.component.css']
})
export class SortSwitchComponent {

  @Input() sortOrder: string;

}
