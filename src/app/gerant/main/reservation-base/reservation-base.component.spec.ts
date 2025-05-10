import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationBaseComponent } from './reservation-base.component';

describe('ReservationBaseComponent', () => {
  let component: ReservationBaseComponent;
  let fixture: ComponentFixture<ReservationBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
