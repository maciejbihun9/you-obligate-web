import { Injectable } from '@angular/core';

import { SuperTableColumn, ColumnState, SORT_ORDER } from '../models/interfaces';
import { Observable, BehaviorSubject } from 'rxjs';

const sortCycle: SORT_ORDER[] = ['ASC', 'DESC', undefined];
const getNextSortOrder: Function = function(currentSortOrder: SORT_ORDER): SORT_ORDER {
  const nextIndex: number = (sortCycle.indexOf(currentSortOrder) + 1) % sortCycle.length;
  return sortCycle[nextIndex];
};

@Injectable()
export class SuperTableState {
  /**
  * Manages the super data table state.
  * It is Injectable, so it is available in the all application.
  * Data is available through all application and it is not needed to use communication logic,
  * because this state is like a data base is available everywhere.
  * */

  // publicly exposed properties
  hasAnyFilters = false;
  columns: ColumnState[];
  sortStack: ColumnState[] = [];
  // component can subscribe to this SuperTable and get changes when are available.
  stateChanged$: Observable<SuperTableState>;
  selectedPeriods = new Set();

  /*
  * After each change all subscribers will receive an info about change.
  * They will receive all info, all fields in SuperTableState object
  * */
  private stateChangedSource: BehaviorSubject<SuperTableState> = new BehaviorSubject<SuperTableState>(this);

  constructor() {
    // init observable and observe this subject
    // inform all users that had subscribed to that subject
    this.stateChanged$ = this.stateChangedSource.asObservable();
  }

  public setColumns(columns: Array<SuperTableColumn>) {
    this.columns = columns.map(c => {
      if (!!c.filter) {
        this.hasAnyFilters = true;
      }
      return {
        id: c.id,
        filterValue: undefined,
        sortOrder: undefined,
        isHidden: false,
        width: c.width || undefined,
        def: c,
        hasSort: !! c.sort,
        hasFilter: !!c.filter
      };
    });
  }

  toggleSort(colState: ColumnState, doNotClear: boolean) {

    // Set next sort order
    colState.sortOrder = getNextSortOrder(colState.sortOrder);

    // Check if we are clearing the rest of the sort stack or not
    if (doNotClear) {
      const curIndex: number = this.sortStack.indexOf(colState);
      if (curIndex === -1) {
        this.sortStack.push(colState);
      } else if (!colState.sortOrder) {
        this.sortStack.splice(curIndex, 1);
      }
    } else {
      this.sortStack = colState.sortOrder ? [colState] : [];
      this.columns.forEach((column) => {
        if (column !== colState) {
          column.sortOrder = undefined;
        }
      });
    }

    this.notify();
  }

  notify() {
    // send all instance variables to the users that are listening for this,
    this.stateChangedSource.next(this);
  }

}
