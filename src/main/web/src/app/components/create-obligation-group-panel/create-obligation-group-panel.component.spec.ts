import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObligationGroupPanelComponent } from './create-obligation-group-panel.component';

describe('CreateObligationPanelComponent', () => {
  let component: CreateObligationGroupPanelComponent;
  let fixture: ComponentFixture<CreateObligationGroupPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateObligationGroupPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateObligationGroupPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
