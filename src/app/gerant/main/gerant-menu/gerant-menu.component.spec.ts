import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerantMenuComponent } from './gerant-menu.component';

describe('GerantMenuComponent', () => {
  let component: GerantMenuComponent;
  let fixture: ComponentFixture<GerantMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GerantMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerantMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
