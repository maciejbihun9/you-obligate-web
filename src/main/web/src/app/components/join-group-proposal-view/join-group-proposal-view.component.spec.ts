import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinGroupProposalViewComponent } from './join-group-proposal-view.component';

describe('JoinGroupProposalViewComponent', () => {
  let component: JoinGroupProposalViewComponent;
  let fixture: ComponentFixture<JoinGroupProposalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinGroupProposalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinGroupProposalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
