import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerforgotpasswordComponent } from './sellerforgotpassword.component';

describe('SellerforgotpasswordComponent', () => {
  let component: SellerforgotpasswordComponent;
  let fixture: ComponentFixture<SellerforgotpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerforgotpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerforgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
