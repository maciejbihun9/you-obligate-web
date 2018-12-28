import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondViewComponent } from './bond-view.component';

describe('BondViewComponent', () => {
  let component: BondViewComponent;
  let fixture: ComponentFixture<BondViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
