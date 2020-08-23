import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCardTransactionsComponent } from './view-card-transactions.component';

describe('ViewCardTransactionsComponent', () => {
  let component: ViewCardTransactionsComponent;
  let fixture: ComponentFixture<ViewCardTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCardTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCardTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
