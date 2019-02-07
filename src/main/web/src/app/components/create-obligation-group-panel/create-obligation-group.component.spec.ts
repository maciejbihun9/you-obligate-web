import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObligationGroupComponent } from './create-obligation-group.component';

describe('CreateObligationPanelComponent', () => {
  let component: CreateObligationGroupComponent;
  let fixture: ComponentFixture<CreateObligationGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateObligationGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateObligationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
