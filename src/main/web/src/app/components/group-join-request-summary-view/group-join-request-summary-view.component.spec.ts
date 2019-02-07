import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupJoinRequestSummaryViewComponent } from './group-join-request-summary-view.component';

describe('GroupJoinRequestSummaryViewComponent', () => {
  let component: GroupJoinRequestSummaryViewComponent;
  let fixture: ComponentFixture<GroupJoinRequestSummaryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupJoinRequestSummaryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupJoinRequestSummaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
