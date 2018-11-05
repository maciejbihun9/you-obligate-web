import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObligationGroupsPanelComponent } from './obligation-groups-panel.component';

describe('ObligationGroupsPanelComponent', () => {
  let component: ObligationGroupsPanelComponent;
  let fixture: ComponentFixture<ObligationGroupsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObligationGroupsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObligationGroupsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
