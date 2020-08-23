import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPendingCustomersComponent } from './view-all-pending-customers.component';

describe('ViewAllPendingCustomersComponent', () => {
  let component: ViewAllPendingCustomersComponent;
  let fixture: ComponentFixture<ViewAllPendingCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllPendingCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllPendingCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
