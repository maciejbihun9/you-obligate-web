import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserObligationGroupsComponent } from './user-obligation-groups.component';

describe('ObligationGroupsPanelComponent', () => {
  let component: UserObligationGroupsComponent;
  let fixture: ComponentFixture<UserObligationGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserObligationGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserObligationGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
