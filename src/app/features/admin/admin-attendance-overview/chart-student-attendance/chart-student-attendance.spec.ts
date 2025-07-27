import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStudentAttendance } from './chart-student-attendance';

describe('ChartStudentAttendance', () => {
  let component: ChartStudentAttendance;
  let fixture: ComponentFixture<ChartStudentAttendance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartStudentAttendance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartStudentAttendance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
