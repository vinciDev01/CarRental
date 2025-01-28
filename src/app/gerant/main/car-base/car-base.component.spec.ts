import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBaseComponent } from './car-base.component';

describe('CarBaseComponent', () => {
  let component: CarBaseComponent;
  let fixture: ComponentFixture<CarBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
