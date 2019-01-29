import {Component, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import { SuperTableFilter, ColumnState } from '../models/interfaces';
import { SuperTableState } from '../services/super-table-state.service';

@Component({
  /* tslint:disable-next-line */
  selector: '[super-table-resizer]',
  template: `<div class="notch" [ngClass]="{ explicit: column.width }"></div>`,
  styles: [`
    :host {
      position: absolute;
      right: 0;
      top: 0;
      width: 5px;
      height: 100%;
      cursor: col-resize;
    }
    .notch.explicit {
      background-color: rgba(22, 140, 239, 0.2);
    }
    .notch {
      width: 100%;
      height: 50%;
      transform: translateY(50%);
      box-shadow: inset 1px 0 #DDD;
    }
  `]
})
export class ResizerComponent {

  private static MAX_CLICK_WAIT = 250;
  private static MIN_COLUMN_WIDTH = 30;

  @Input() column: ColumnState;
  @Input() actualWidth: number;

  constructor (private el: ElementRef) { }

  @HostBinding('attr.title')
  get title(): string {
    return 'Click-and-drag to resize. Click to clear specified width.';
  }

  @HostListener('mousedown', ['$event'])
  grab(grabEvt: MouseEvent) {
    grabEvt.preventDefault();
    const mousedownTime: number = Date.now();
    const initClientX: number = grabEvt.clientX;
    const initWidth: number = this.column.width || this.getActualParentWidth();
    const drag: EventListener = (event: MouseEvent) => {
      const change: number = event.clientX - initClientX;
      this.column.width = Math.max(initWidth + change, ResizerComponent.MIN_COLUMN_WIDTH);
    };
    const unbindDrag: EventListener = () => {
      window.removeEventListener('mousemove', drag);
      window.removeEventListener('mouseup', unbindDrag);
      if (Date.now() - mousedownTime < ResizerComponent.MAX_CLICK_WAIT) {
        this.column.width = undefined;
      }
    };
    window.addEventListener('mousemove', drag);
    window.addEventListener('mouseup', unbindDrag);
  }

  @HostListener('click', ['$event'])
  stopClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  private getActualParentWidth(): number {
    return this.el.nativeElement.parentElement.offsetWidth;
  }

}

@Component({
  /* tslint:disable-next-line */
  selector: '[super-table-header]',
  template: `
    <div  [style.writingMode]="writingMode()" [style.top]="tabMargin()" *ngIf="!noHeight" class="table-header-div" [title]="SORT_TITLE">
      <app-sort-switch [style.visibility]="tableHeaderVisibility()" (click)="handleSort()" [sortOrder]="column.sortOrder"></app-sort-switch>
      <span >
        {{ getValue() }}
      </span>
    </div>
    <div *ngIf="!noHeight && !column.def.lockWidth" super-table-resizer [column]="column"></div>
    <input [class.direction]="this.column.isHidden" (click)="closeColumn()" type="image" src="../../../assets/right_arrow.png" id="hide-column-btn" />
  `,
  styles: [`
    :host {
      height: 64px;
      background-color: white;
      position: relative;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    :host:hover .sort-icon {
      opacity: 1;
    }
    .table-header-div {
      position: relative;
      display: block;
    }
    
    .direction {
      -webkit-transform:rotateY(180deg);
      -moz-transform:rotateY(180deg);
      -o-transform:rotateY(180deg);
      -ms-transform:rotateY(180deg);
    }

    .sort-icon {
      font-size: 70%;
      opacity: 1;
      color: #168cef;
      text-shadow: 0 1px 2px rgba(22, 140, 239, 0.6);
    }
    .sort-icon .no-sort {
      opacity: 0.3;
      text-shadow: none;
      color: black;
    }
    #hide-column-btn {
      position: absolute;
      right: 8px;
      top: 8px;
      height: 6px;
    }
    
  `]
})
export class TableHeaderComponent {

  @Input() table: ElementRef;
  @Input() column: ColumnState;
  @Input() noHeight = false;

  SORT_TITLE = 'Click to change sort order. Shift-click to sort on multiple columns.';

  constructor(private el: ElementRef, private state: SuperTableState) { }

  getValue(): string {
    return this.column.def.label;
  }

  tabMargin(){
    return this.column.isHidden ? '16px' : '0px';
  }

  handleSort(){
    if (this.column.hasSort) {
      this.state.toggleSort(this.column, false);
    }
  }

  // manages header visibility
  public tableHeaderVisibility(){
    return this.column.isHidden ? 'hidden' : 'visible';
  }

  // make column name be vertical
  public writingMode(){
    return this.column.isHidden ? 'tb-rl' : '';
  }

  @HostBinding('style.width')
  get width(): string {
    return (typeof this.column.width === 'number') ? this.column.width + 'px' : 'auto';
  }

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent) {
    event.preventDefault();
  }

  // Manages column visibility
  closeColumn(){
    if (this.column.isHidden){
      this.column.width = 'auto';
      this.column.isHidden = false;
    } else {
      this.column.width = 32;
      this.column.isHidden = true;
    }
  }


}



