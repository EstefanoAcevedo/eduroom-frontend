import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAttendanceHistory } from './student-attendance-history';

describe('StudentAttendanceHistory', () => {
  let component: StudentAttendanceHistory;
  let fixture: ComponentFixture<StudentAttendanceHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentAttendanceHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAttendanceHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
