import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserObligationStrategyForRegisteredServiceComponent } from './user-obligation-strategy-for-registered-service.component';

describe('UserObligationStrategyForRegisteredServiceComponent', () => {
  let component: UserObligationStrategyForRegisteredServiceComponent;
  let fixture: ComponentFixture<UserObligationStrategyForRegisteredServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserObligationStrategyForRegisteredServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserObligationStrategyForRegisteredServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
