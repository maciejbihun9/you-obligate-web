import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondListItemComponent } from './bond-list-item.component';

describe('BondListItemComponent', () => {
  let component: BondListItemComponent;
  let fixture: ComponentFixture<BondListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
