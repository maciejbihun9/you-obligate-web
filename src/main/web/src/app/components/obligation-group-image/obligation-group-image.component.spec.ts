import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObligationGroupImageComponent } from './obligation-group-image.component';

describe('ObligationGroupImageComponent', () => {
  let component: ObligationGroupImageComponent;
  let fixture: ComponentFixture<ObligationGroupImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObligationGroupImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObligationGroupImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
