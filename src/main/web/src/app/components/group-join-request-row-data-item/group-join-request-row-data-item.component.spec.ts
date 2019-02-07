import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupJoinRequestRowDataItemComponent } from './group-join-request-row-data-item.component';

describe('GroupJoinRequestRowDataItemComponent', () => {
  let component: GroupJoinRequestRowDataItemComponent;
  let fixture: ComponentFixture<GroupJoinRequestRowDataItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupJoinRequestRowDataItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupJoinRequestRowDataItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
