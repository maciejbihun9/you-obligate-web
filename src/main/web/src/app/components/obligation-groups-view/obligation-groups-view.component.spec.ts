import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObligationGroupsViewComponent } from './obligation-groups-view.component';

describe('ObligationGroupsViewComponent', () => {
  let component: ObligationGroupsViewComponent;
  let fixture: ComponentFixture<ObligationGroupsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObligationGroupsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObligationGroupsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
