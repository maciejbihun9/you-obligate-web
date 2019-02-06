import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObligationStrategyViewComponent } from './create-obligation-strategy-view.component';

describe('CreateObligationStrategyViewComponent', () => {
  let component: CreateObligationStrategyViewComponent;
  let fixture: ComponentFixture<CreateObligationStrategyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateObligationStrategyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateObligationStrategyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
