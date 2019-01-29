import { Component, Input } from '@angular/core';
import { SuperTableState } from '../services/super-table-state.service';

@Component({
  /* tslint:disable-next-line */
  selector: '[super-table-row]',
  template: `<td [style.height]="height" *ngFor="let column of state.columns" super-table-cell [row]="row" [column]="column"></td>`

})
export class SuperTableRowComponent {

  @Input() row: any;
  height = '48dp';

  constructor(public state: SuperTableState) { }

}
