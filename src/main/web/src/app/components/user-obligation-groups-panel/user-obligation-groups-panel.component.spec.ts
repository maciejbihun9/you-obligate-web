import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserObligationGroupsPanelComponent } from './user-obligation-groups-panel.component';

describe('ObligationGroupsPanelComponent', () => {
  let component: UserObligationGroupsPanelComponent;
  let fixture: ComponentFixture<UserObligationGroupsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserObligationGroupsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserObligationGroupsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
