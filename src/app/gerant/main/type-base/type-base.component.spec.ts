import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBaseComponent } from './type-base.component';

describe('TypeBaseComponent', () => {
  let component: TypeBaseComponent;
  let fixture: ComponentFixture<TypeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
