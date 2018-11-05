import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObligationPanelComponent } from './create-obligation-panel.component';

describe('CreateObligationPanelComponent', () => {
  let component: CreateObligationPanelComponent;
  let fixture: ComponentFixture<CreateObligationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateObligationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateObligationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
