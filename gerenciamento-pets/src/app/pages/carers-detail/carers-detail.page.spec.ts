import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarersDetailPage } from './carers-detail.page';

describe('CarersDetailPage', () => {
  let component: CarersDetailPage;
  let fixture: ComponentFixture<CarersDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarersDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
