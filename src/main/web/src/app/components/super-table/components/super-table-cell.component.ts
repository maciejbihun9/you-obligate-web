import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  Input,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ViewContainerRef, OnInit, OnChanges, SimpleChanges, HostBinding
} from '@angular/core';

import { ColumnState } from '../models/interfaces';

@Component({
  /* tslint:disable-next-line */
  selector: '[super-table-cell]',
  template: `
    <span *ngIf="!column.def.component" [attr.title]="getFormattedValue()">{{ getFormattedValue() }}</span>
  `,
  styles: [`
    :host {
      height: 64px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  `]
})
export class SuperTableCellComponent {

  @Input() row: any;
  @Input() column: ColumnState;

  @HostBinding('style.color')
  get color(): string {
    return this.column.isHidden ? 'white' : 'black';
  }

  getValue(): any {
    return this.row[this.column.def.key];
  }

  getFormattedValue(): any {
    if (this.column.def.format) {
      return this.column.def.format(this.getValue(), this.row, this.column);
    }

    return this.getValue();
  }

}
