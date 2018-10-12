import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisteredServicesComponent } from './user-registered-services.component';

describe('UserRegisteredServicesComponent', () => {
  let component: UserRegisteredServicesComponent;
  let fixture: ComponentFixture<UserRegisteredServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegisteredServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisteredServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
