import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupJoinRequestDetailsViewComponent } from './group-join-request-details-view.component';

describe('GroupJoinRequestDetailsViewComponent', () => {
  let component: GroupJoinRequestDetailsViewComponent;
  let fixture: ComponentFixture<GroupJoinRequestDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupJoinRequestDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupJoinRequestDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
