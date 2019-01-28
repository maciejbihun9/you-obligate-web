import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupJoinRequestsPanelViewComponent } from './group-join-requests-panel-view.component';

describe('GroupJoinRequestsPanelViewComponent', () => {
  let component: GroupJoinRequestsPanelViewComponent;
  let fixture: ComponentFixture<GroupJoinRequestsPanelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupJoinRequestsPanelViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupJoinRequestsPanelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
