import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCarsComponent } from './about-cars.component';

describe('AboutCarsComponent', () => {
  let component: AboutCarsComponent;
  let fixture: ComponentFixture<AboutCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutCarsComponent]
    });
    fixture = TestBed.createComponent(AboutCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
