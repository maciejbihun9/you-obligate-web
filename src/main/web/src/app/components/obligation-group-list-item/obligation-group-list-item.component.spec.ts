import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObligationGroupListItemComponent } from './obligation-group-list-item.component';

describe('ObligationGroupComponent', () => {
  let component: ObligationGroupListItemComponent;
  let fixture: ComponentFixture<ObligationGroupListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObligationGroupListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObligationGroupListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
