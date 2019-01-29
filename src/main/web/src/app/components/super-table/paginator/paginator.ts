import {Component, Input} from '@angular/core';
import {PageEvent} from '@angular/material';

/**
 * @title Configurable paginator
 */
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.html',
  styleUrls: ['./paginator.css'],
})
export class Paginator {
  // MatPaginator Inputs
  @Input() length = 100;
  @Input() pageSize = 10;
  @Input() pageSizeOptions = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
