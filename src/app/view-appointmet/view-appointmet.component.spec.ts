import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmetComponent } from './view-appointmet.component';

describe('ViewAppointmetComponent', () => {
  let component: ViewAppointmetComponent;
  let fixture: ComponentFixture<ViewAppointmetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAppointmetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
