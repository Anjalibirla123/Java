import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceFitnessTesterComponent } from './place-fitness-tester.component';

describe('PlaceFitnessTesterComponent', () => {
  let component: PlaceFitnessTesterComponent;
  let fixture: ComponentFixture<PlaceFitnessTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceFitnessTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceFitnessTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
