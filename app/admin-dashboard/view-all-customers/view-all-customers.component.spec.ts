import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCustomersComponent } from './view-all-customers.component';

describe('ViewAllCustomersComponent', () => {
  let component: ViewAllCustomersComponent;
  let fixture: ComponentFixture<ViewAllCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllCustomersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
