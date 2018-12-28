import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObligationGroupViewComponent } from './obligation-group-view.component';

describe('ObligationGroupViewComponent', () => {
  let component: ObligationGroupViewComponent;
  let fixture: ComponentFixture<ObligationGroupViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObligationGroupViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObligationGroupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
