import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueBaseComponent } from './marque-base.component';

describe('MarqueBaseComponent', () => {
  let component: MarqueBaseComponent;
  let fixture: ComponentFixture<MarqueBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarqueBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarqueBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
