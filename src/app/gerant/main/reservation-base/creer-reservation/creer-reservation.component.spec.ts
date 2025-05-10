import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerReservationComponent } from './creer-reservation.component';

describe('CreerReservationComponent', () => {
  let component: CreerReservationComponent;
  let fixture: ComponentFixture<CreerReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreerReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
