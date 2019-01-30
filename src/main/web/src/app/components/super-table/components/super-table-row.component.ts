import { Component, Input } from '@angular/core';
import { SuperTableState } from '../services/super-table-state.service';

@Component({
  /* tslint:disable-next-line */
  selector: '[super-table-row]',
  template: `
    <mat-accordion multi="true">
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <td [style.height]="height" *ngFor="let column of state.columns" super-table-cell [row]="row" [column]="column"></td>
        </mat-expansion-panel-header>
        <div>
          <p>This is just a simple content</p>
        </div>
      </mat-expansion-panel>
    </mat-accordion>
    `

})
export class SuperTableRowComponent {

  @Input() row: any;
  height = '48dp';

  constructor(public state: SuperTableState) { }

}
