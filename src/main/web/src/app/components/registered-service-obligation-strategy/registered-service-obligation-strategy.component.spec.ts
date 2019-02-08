import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredServiceObligationStrategyComponent } from './registered-service-obligation-strategy.component';

describe('RegisteredServiceObligationStrategyComponent', () => {
  let component: RegisteredServiceObligationStrategyComponent;
  let fixture: ComponentFixture<RegisteredServiceObligationStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredServiceObligationStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredServiceObligationStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
