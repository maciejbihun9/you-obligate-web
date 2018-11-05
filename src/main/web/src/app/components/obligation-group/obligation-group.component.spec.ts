import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObligationGroupComponent } from './obligation-group.component';

describe('ObligationGroupComponent', () => {
  let component: ObligationGroupComponent;
  let fixture: ComponentFixture<ObligationGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObligationGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObligationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
