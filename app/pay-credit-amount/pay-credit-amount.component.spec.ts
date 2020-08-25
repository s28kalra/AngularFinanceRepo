import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCreditAmountComponent } from './pay-credit-amount.component';

describe('PayCreditAmountComponent', () => {
  let component: PayCreditAmountComponent;
  let fixture: ComponentFixture<PayCreditAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayCreditAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCreditAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
