import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExpandableRowsWithFilterComponent } from './table-expandable-rows-with-filter.component';

describe('TableExpandableRowsWithFilterComponent', () => {
  let component: TableExpandableRowsWithFilterComponent;
  let fixture: ComponentFixture<TableExpandableRowsWithFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableExpandableRowsWithFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableExpandableRowsWithFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
