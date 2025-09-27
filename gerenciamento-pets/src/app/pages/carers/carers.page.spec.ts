import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarersPage } from './carers.page';

describe('CarersPage', () => {
  let component: CarersPage;
  let fixture: ComponentFixture<CarersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
